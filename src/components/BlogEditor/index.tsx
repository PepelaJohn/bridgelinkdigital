import React, { useState, useRef, useEffect, useCallback } from 'react';
import {
  Bold,
  Italic,
  Underline,
  Link,
  Image,
  List,
  ListOrdered,
  Quote,
  Code,
  Eye,
  EyeOff,
  Save,
  FileText,
  Paperclip,
} from 'lucide-react';

interface BlogEditorProps {
  initialContent?: string;
  onSave?: (content: string, title: string) => void;
  onAutosave?: (content: string, title: string) => void;
}

const BlogEditor: React.FC<BlogEditorProps> = ({
  initialContent = '',
  onSave,
  onAutosave,
}) => {
  const [content, setContent] = useState(initialContent);
  const [title, setTitle] = useState('');
  const [isPreview, setIsPreview] = useState(false);
  const [lastSaved, setLastSaved] = useState<Date | null>(null);
  const [isAutoSaving, setIsAutoSaving] = useState(false);
  const editorRef = useRef<HTMLTextAreaElement>(null);
  const titleRef = useRef<HTMLInputElement>(null);

  // Autosave functionality
  const autosave = useCallback(async () => {
    if (content.trim() || title.trim()) {
      setIsAutoSaving(true);
      try {
        await onAutosave?.(content, title);
        setLastSaved(new Date());
      } catch (error) {
        console.error('Autosave failed:', error);
      } finally {
        setIsAutoSaving(false);
      }
    }
  }, [content, title, onAutosave]);

  // Autosave every 30 seconds
  useEffect(() => {
    const interval = setInterval(autosave, 30000);
    return () => clearInterval(interval);
  }, [autosave]);

  // Autosave on content change (debounced)
  useEffect(() => {
    const timeoutId = setTimeout(autosave, 2000);
    return () => clearTimeout(timeoutId);
  }, [content, title, autosave]);

  const insertText = (beforeText: string, afterText: string = '') => {
    const textarea = editorRef.current;
    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = content.substring(start, end);

    const newText =
      content.substring(0, start) +
      beforeText +
      selectedText +
      afterText +
      content.substring(end);

    setContent(newText);

    // Restore cursor position
    setTimeout(() => {
      textarea.focus();
      textarea.setSelectionRange(
        start + beforeText.length,
        start + beforeText.length + selectedText.length
      );
    }, 0);
  };

  const formatText = (type: string) => {
    switch (type) {
      case 'bold':
        insertText('**', '**');
        break;
      case 'italic':
        insertText('*', '*');
        break;
      case 'underline':
        insertText('<u>', '</u>');
        break;
      case 'link':
        insertText('[', '](url)');
        break;
      case 'image':
        insertText('![alt text](', ')');
        break;
      case 'code':
        insertText('`', '`');
        break;
      case 'quote':
        insertText('\n> ', '');
        break;
      case 'ul':
        insertText('\n- ', '');
        break;
      case 'ol':
        insertText('\n1. ', '');
        break;
      case 'h1':
        insertText('\n# ', '');
        break;
      case 'h2':
        insertText('\n## ', '');
        break;
      case 'h3':
        insertText('\n### ', '');
        break;
    }
  };

  const handleSave = async () => {
    try {
      await onSave?.(content, title);
      setLastSaved(new Date());
    } catch (error) {
      console.error('Save failed:', error);
    }
  };

  const renderPreview = () => {
    // Simple markdown to HTML conversion for preview
    let html = content
      .replace(/^### (.*$)/gm, '<h3 class="text-lg font-semibold mb-2">$1</h3>')
      .replace(/^## (.*$)/gm, '<h2 class="text-xl font-semibold mb-3">$1</h2>')
      .replace(/^# (.*$)/gm, '<h1 class="text-2xl font-bold mb-4">$1</h1>')
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.*?)\*/g, '<em>$1</em>')
      .replace(/<u>(.*?)<\/u>/g, '<u>$1</u>')
      .replace(/`(.*?)`/g, '<code class="bg-accent-100 px-1 rounded">$1</code>')
      .replace(
        /^\> (.*$)/gm,
        '<blockquote class="border-l-4 border-primary pl-4 italic">$1</blockquote>'
      )
      .replace(/^\- (.*$)/gm, '<li>$1</li>')
      .replace(/^\d+\. (.*$)/gm, '<li>$1</li>')
      .replace(
        /\[([^\]]+)\]\(([^)]+)\)/g,
        '<a href="$2" class="text-primary underline">$1</a>'
      )
      .replace(
        /!\[([^\]]*)\]\(([^)]+)\)/g,
        '<img src="$2" alt="$1" class="max-w-full h-auto" />'
      )
      .replace(/\n/g, '<br>');

    return html;
  };

  return (
    <div className="mx-auto max-w-4xl rounded-20 bg-white p-6 shadow-1">
      {/* Header */}
      <div className="mb-6">
        <input
          ref={titleRef}
          type="text"
          placeholder="Blog post title..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border-none font-primary text-2xl font-bold placeholder-accent-800 outline-none"
        />
        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center space-x-2 text-sm text-accent-800">
            {isAutoSaving && (
              <span className="text-primary">Autosaving...</span>
            )}
            {lastSaved && !isAutoSaving && (
              <span>Last saved: {lastSaved.toLocaleTimeString()}</span>
            )}
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setIsPreview(!isPreview)}
              className="flex items-center space-x-1 px-3 py-1 text-sm text-accent-800 transition-colors hover:text-primary"
            >
              {isPreview ? <EyeOff size={16} /> : <Eye size={16} />}
              <span>{isPreview ? 'Edit' : 'Preview'}</span>
            </button>
            <button
              onClick={handleSave}
              className="flex items-center space-x-1 rounded-10 bg-primary px-4 py-2 text-white transition-colors hover:bg-primary/90"
            >
              <Save size={16} />
              <span>Save</span>
            </button>
          </div>
        </div>
      </div>

      {/* Toolbar */}
      {!isPreview && (
        <div className="mb-4 flex flex-wrap items-center gap-2 rounded-10 bg-accent-100 p-3">
          <div className="flex items-center space-x-1">
            <button
              onClick={() => formatText('bold')}
              className="rounded-5 p-2 transition-colors hover:bg-white"
              title="Bold"
            >
              <Bold size={16} />
            </button>
            <button
              onClick={() => formatText('italic')}
              className="rounded-5 p-2 transition-colors hover:bg-white"
              title="Italic"
            >
              <Italic size={16} />
            </button>
            <button
              onClick={() => formatText('underline')}
              className="rounded-5 p-2 transition-colors hover:bg-white"
              title="Underline"
            >
              <Underline size={16} />
            </button>
          </div>

          <div className="h-6 w-px bg-accent-200" />

          <div className="flex items-center space-x-1">
            <button
              onClick={() => formatText('h1')}
              className="rounded-5 px-2 py-1 text-sm transition-colors hover:bg-white"
              title="Heading 1"
            >
              H1
            </button>
            <button
              onClick={() => formatText('h2')}
              className="rounded-5 px-2 py-1 text-sm transition-colors hover:bg-white"
              title="Heading 2"
            >
              H2
            </button>
            <button
              onClick={() => formatText('h3')}
              className="rounded-5 px-2 py-1 text-sm transition-colors hover:bg-white"
              title="Heading 3"
            >
              H3
            </button>
          </div>

          <div className="h-6 w-px bg-accent-200" />

          <div className="flex items-center space-x-1">
            <button
              onClick={() => formatText('ul')}
              className="rounded-5 p-2 transition-colors hover:bg-white"
              title="Bullet List"
            >
              <List size={16} />
            </button>
            <button
              onClick={() => formatText('ol')}
              className="rounded-5 p-2 transition-colors hover:bg-white"
              title="Numbered List"
            >
              <ListOrdered size={16} />
            </button>
            <button
              onClick={() => formatText('quote')}
              className="rounded-5 p-2 transition-colors hover:bg-white"
              title="Quote"
            >
              <Quote size={16} />
            </button>
          </div>

          <div className="h-6 w-px bg-accent-200" />

          <div className="flex items-center space-x-1">
            <button
              onClick={() => formatText('link')}
              className="rounded-5 p-2 transition-colors hover:bg-white"
              title="Link"
            >
              <Link size={16} />
            </button>
            <button
              onClick={() => formatText('image')}
              className="rounded-5 p-2 transition-colors hover:bg-white"
              title="Image"
            >
              <Image size={16} />
            </button>
            <button
              onClick={() => formatText('code')}
              className="rounded-5 p-2 transition-colors hover:bg-white"
              title="Code"
            >
              <Code size={16} />
            </button>
            <button
              className="rounded-5 p-2 transition-colors hover:bg-white"
              title="Attachment"
            >
              <Paperclip size={16} />
            </button>
          </div>
        </div>
      )}

      {/* Editor/Preview */}
      <div className="min-h-96">
        {isPreview ? (
          <div className="prose prose-lg max-w-none">
            {title && (
              <h1 className="mb-6 font-primary text-3xl font-bold">{title}</h1>
            )}
            <div
              className="font-secondary leading-relaxed"
              dangerouslySetInnerHTML={{ __html: renderPreview() }}
            />
          </div>
        ) : (
          <textarea
            ref={editorRef}
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Start writing your blog post... You can use Markdown syntax or the toolbar above."
            className="min-h-96 w-full resize-none rounded-10 border border-accent-200 p-4 font-secondary leading-relaxed outline-none transition-colors focus:border-primary"
          />
        )}
      </div>

      {/* Footer */}
      <div className="mt-6 border-t border-accent-200 pt-4 text-sm text-accent-800">
        <p>
          <FileText size={14} className="mr-1 inline" />
          Tip: Use Markdown syntax for formatting, or use the toolbar above.
          Your work is automatically saved every 30 seconds.
        </p>
      </div>
    </div>
  );
};

export default BlogEditor;

'use client';
import React, { useState, useEffect, useRef } from 'react';
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
  Save,
  Eye,
  Moon,
  Sun,
  Undo,
  Redo,
  AlignLeft,
  AlignCenter,
  AlignRight,
} from 'lucide-react';

const BlogEditor = () => {
  const [content, setContent] = useState('');
  const [title, setTitle] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isPreview, setIsPreview] = useState(false);
  const [lastSaved, setLastSaved] = useState<Date | null>(null);
  const [isAutoSaving, setIsAutoSaving] = useState(false);
  const editorRef = useRef<HTMLDivElement | null>(null);
  const autoSaveTimeoutRef = useRef<number | null>(null);

  // Auto-save functionality
  useEffect(() => {
    if (autoSaveTimeoutRef.current) {
      clearTimeout(autoSaveTimeoutRef.current);
    }

    if (content || title) {
      autoSaveTimeoutRef.current = window.setTimeout(() => {
        autoSave();
      }, 2000); // Auto-save after 2 seconds of inactivity
    }

    return () => {
      if (autoSaveTimeoutRef.current) {
        clearTimeout(autoSaveTimeoutRef.current);
      }
    };
  }, [content, title]);

  const autoSave = async () => {
    setIsAutoSaving(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 500));
    setLastSaved(new Date());
    setIsAutoSaving(false);
  };

  const handleSave = async () => {
    await autoSave();
  };

  const formatText = (command: string, value?: string) => {
    document.execCommand(command, false, value);
    editorRef.current?.focus();
  };

  const insertLink = () => {
    const url = prompt('Enter URL:');
    if (url) {
      formatText('createLink', url);
    }
  };

  const insertImage = () => {
    const url = prompt('Enter image URL:');
    if (url) {
      formatText('insertImage', url);
    }
  };

  const togglePreview = () => {
    setIsPreview(!isPreview);
  };

  const ToolbarButton = ({
    icon: Icon,
    onClick,
    title,
    isActive = false,
  }: {
    icon: any;
    onClick: () => void;
    title: string;
    isActive?: boolean;
  }) => (
    <button
      onClick={onClick}
      title={title}
      className={`rounded-md p-2 transition-colors duration-200 ${
        isActive
          ? 'bg-primary text-white'
          : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700'
      }`}
    >
      <Icon size={18} />
    </button>
  );

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'dark' : ''}`}
    >
      <div className="min-h-screen bg-gray-50 transition-colors duration-300 dark:bg-gray-900">
        {/* Header */}
        <header className="border-b border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              <div className="flex items-center space-x-4">
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Blog Editor
                </h1>
                {lastSaved && (
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {isAutoSaving
                      ? 'Saving...'
                      : `Last saved: ${lastSaved.toLocaleTimeString()}`}
                  </span>
                )}
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={togglePreview}
                  className="flex items-center space-x-2 rounded-md bg-gray-100 px-4 py-2 transition-colors duration-200 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600"
                >
                  <Eye size={18} />
                  <span className="hidden sm:inline">Preview</span>
                </button>
                <button
                  onClick={handleSave}
                  className="flex items-center space-x-2 rounded-md bg-primary px-4 py-2 text-white transition-colors duration-200 hover:bg-primary/90"
                >
                  <Save size={18} />
                  <span className="hidden sm:inline">Save</span>
                </button>
                <button
                  onClick={() => setIsDarkMode(!isDarkMode)}
                  className="rounded-md p-2 transition-colors duration-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  {isDarkMode ? (
                    <Sun size={18} className="text-yellow-500" />
                  ) : (
                    <Moon size={18} className="text-gray-600" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-lg bg-white shadow-lg dark:bg-gray-800">
            {/* Title Input */}
            <div className="border-b border-gray-200 p-6 dark:border-gray-700">
              <input
                type="text"
                placeholder="Enter your blog title..."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full border-none bg-transparent text-3xl font-bold text-gray-900 placeholder-gray-400 outline-none dark:text-white dark:placeholder-gray-500"
              />
            </div>

            {!isPreview && (
              <>
                {/* Toolbar */}
                <div className="dark:bg-gray-750 border-b border-gray-200 bg-gray-50 p-4 dark:border-gray-700">
                  <div className="flex flex-wrap gap-2">
                    <div className="flex items-center space-x-1 border-r border-gray-300 pr-2 dark:border-gray-600">
                      <ToolbarButton
                        icon={Undo}
                        onClick={() => formatText('undo')}
                        title="Undo"
                      />
                      <ToolbarButton
                        icon={Redo}
                        onClick={() => formatText('redo')}
                        title="Redo"
                      />
                    </div>

                    <div className="flex items-center space-x-1 border-r border-gray-300 pr-2 dark:border-gray-600">
                      <ToolbarButton
                        icon={Bold}
                        onClick={() => formatText('bold')}
                        title="Bold"
                      />
                      <ToolbarButton
                        icon={Italic}
                        onClick={() => formatText('italic')}
                        title="Italic"
                      />
                      <ToolbarButton
                        icon={Underline}
                        onClick={() => formatText('underline')}
                        title="Underline"
                      />
                    </div>

                    <div className="flex items-center space-x-1 border-r border-gray-300 pr-2 dark:border-gray-600">
                      <ToolbarButton
                        icon={AlignLeft}
                        onClick={() => formatText('justifyLeft')}
                        title="Align Left"
                      />
                      <ToolbarButton
                        icon={AlignCenter}
                        onClick={() => formatText('justifyCenter')}
                        title="Align Center"
                      />
                      <ToolbarButton
                        icon={AlignRight}
                        onClick={() => formatText('justifyRight')}
                        title="Align Right"
                      />
                    </div>

                    <div className="flex items-center space-x-1 border-r border-gray-300 pr-2 dark:border-gray-600">
                      <ToolbarButton
                        icon={List}
                        onClick={() => formatText('insertUnorderedList')}
                        title="Bullet List"
                      />
                      <ToolbarButton
                        icon={ListOrdered}
                        onClick={() => formatText('insertOrderedList')}
                        title="Numbered List"
                      />
                      <ToolbarButton
                        icon={Quote}
                        onClick={() => formatText('formatBlock', 'blockquote')}
                        title="Quote"
                      />
                    </div>

                    <div className="flex items-center space-x-1">
                      <ToolbarButton
                        icon={Link}
                        onClick={insertLink}
                        title="Insert Link"
                      />
                      <ToolbarButton
                        icon={Image}
                        onClick={insertImage}
                        title="Insert Image"
                      />
                      <ToolbarButton
                        icon={Code}
                        onClick={() => formatText('formatBlock', 'pre')}
                        title="Code Block"
                      />
                    </div>
                  </div>
                </div>

                {/* Editor */}
                <div className="p-6">
                  <div
                    ref={editorRef}
                    contentEditable
                    className="min-h-[500px] text-lg leading-relaxed text-gray-900 outline-none dark:text-gray-100"
                    style={{ wordBreak: 'break-word' }}
                    onInput={(e) => setContent(e.currentTarget.innerHTML)}
                    dangerouslySetInnerHTML={{ __html: content }}
                  />
                </div>
              </>
            )}

            {isPreview && (
              <div className="p-6">
                <div className="prose prose-lg dark:prose-invert max-w-none">
                  <h1 className="mb-8 text-4xl font-bold text-gray-900 dark:text-white">
                    {title || 'Untitled Post'}
                  </h1>
                  <div
                    className="text-gray-900 dark:text-gray-100"
                    dangerouslySetInnerHTML={{ __html: content }}
                  />
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Mobile-friendly floating save button */}
        <div className="fixed bottom-6 right-6 sm:hidden">
          <button
            onClick={handleSave}
            className="rounded-full bg-primary p-4 text-white shadow-lg transition-colors duration-200 hover:bg-primary/90"
          >
            <Save size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogEditor;

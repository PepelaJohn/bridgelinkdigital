import { Container } from '@/src/components/container';
import { TextInput } from '@/src/components/inputs/text-input';
import { Button } from '@/src/components/button';
import { FaMagnifyingGlass } from 'react-icons/fa6';
import { FaTimes } from 'react-icons/fa';

interface Props {
  setIsModalOpen: (open: boolean) => void;
}

export function SearchModal({ setIsModalOpen }: Props) {
  return (
    <div className="fixed top-0 left-0 z-111 h-full w-full">
      <div
        className="absolute inset-0 z-444"
        onClick={() => setIsModalOpen(false)}
      ></div>
      <div
        className="bg-accent-300 dark:bg-accent-700 relative z-444 flex min-h-[320px] items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <Container>
          <div className="mx-auto flex max-w-[560px] items-center gap-0">
            <TextInput
              placeholder="Search Here"
              name="text"
              className="rounded-5 rounded-r-none border-none bg-white text-black dark:text-black"
            />
            <Button
              type="submit"
              className="bg-primary hover:bg-primary-light h-[60px]! w-[60px]! flex-none rounded-l-none p-0! after:hidden hover:text-white dark:hover:text-white"
            >
              <span className="relative z-1">
                <FaMagnifyingGlass />
              </span>
            </Button>
          </div>
        </Container>
        <button
          aria-label="search modal handler"
          className="rounded-5 bg-primary hover:bg-primary-light absolute top-2.5 right-7 z-10 grid h-[60px] w-[60px] place-items-center text-[30px] text-white transition-colors duration-350"
          onClick={() => setIsModalOpen(false)}
        >
          <FaTimes />
        </button>
      </div>
    </div>
  );
}

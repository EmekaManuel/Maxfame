import { SheetMenu } from "./sheet-menu";

export function Navbar() {
  return (
    <header className="sticky top-0 z-10 w-full bg-white ">
      <div className="mx-4 flex h-14 items-center sm:mx-8">
        <div className="flex items-center space-x-4 lg:space-x-0">
          <SheetMenu />
        </div>
        <div className="flex flex-1 items-center justify-end space-x-2"></div>
      </div>
    </header>
  );
}

import dynamic from "next/dynamic";

import Test from "../notes/test.mdx";
import NoteContainer from "./_components/sections/NoteContainer";

export const saveNote = (noteText) => {
  // Here, you can implement the logic to save the note content to an mdx file.
  // For example, you can use a file system library or an API to create the mdx file and write the note content to it.
  // You may need to configure the necessary dependencies and settings based on your specific setup.
  // Once the note is saved, you can update the state or trigger a re-render to display the new content.
  console.log("Saving note:", noteText);
};

export default function Home() {
  return (
    <main className="grid grid-cols-1 md:grid-cols-2 p-4 md:p-0">
      <article>
        <Test />
      </article>
      <NoteContainer />
    </main>
  );
}

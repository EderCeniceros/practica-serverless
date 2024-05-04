import Image from "next/image";
import UserCard from "./Components/usercard";
import NotePicker from "./Components/NotePicker";
import Notes from "./Components/Notes";

export default function Home() {
  return (
    <main className="h-[92vh] md:h-[95vh] grid grid-cols-12">
      <section className="col-span-2 dark:bg-[212135] bg-white p-8 rounded m-5 w-max">
        <UserCard title="Tareas" username="Juan" imageUrl="https://s3.amazonaws.com/www-inside-design/uploads/2019/03/featureuserpersona-810x810.jpg"/>
      </section>
      <section className="col-span-10 h-1 mx-auto my-4 border-0 rounded md-my-10 bg-[a18bff]">
        <NotePicker />
        <Notes />
      </section>
    </main>
  );
}

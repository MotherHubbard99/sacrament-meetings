import Image from "next/image"

export default function HomePage() {
  return (
     <div className="p-6">
      <h1 className="text-3xl font-(--font-dynapuff) flex justify-center">Welcome to Sacrament Meetings</h1>
      
      <div className= "flex justify-center w-1/2 mx-auto rounded-lg shadow-md">
        <Image
          src="/layton_utah_temple_exterior.png"       
          alt="Sacrament meeting congregation"
          width={1200}               
          height={600}               
          priority                   // optional: preloads image
          className="rounded-lg shadow-md"
        />
      </div>

      <p className="mt-4 flex justify-center">Welcome! View upcoming and past meetings.</p>
    </div>
  );
}
//The component calculates the current year dynamically using JavaScript's Date object, ensuring the copyright year is always up to date.
export default function Footer() {  
  return (
    <footer className="bg-[#98DDDF] text-gray-800 py-4 mt-12">
          <div className="container mx-auto text-center">
        <p>Copyright &copy; {new Date().getFullYear()} | Cedar Bench Ward | All rights reserved</p>
      </div>
    </footer>
  );
}
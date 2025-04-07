export default function Footer() {
    return (
      <footer className="bg-green-700 text-white py-4 mt-12">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between text-center md:text-left">
          <p className="text-md font-semibold">
            © {new Date().getFullYear()} <span className="font-semibold">TastyNest</span>. All Rights Reserved.
          </p>
          <p className="text-md mt-2 md:mt-0 font-semibold">
            Developed by{" "}
            <a
              href="https://shahzadali.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-yellow-300 transition-colors duration-200"
            >
              Shahzad Ali
            </a>
          </p>
        </div>
      </footer>
    );
  }
  
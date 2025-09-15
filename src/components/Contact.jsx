

export default function Contact() {
  return (
    <div className="max-w-2xl p-4">
      <h2 className="text-2xl font-bold mb-3">Contact Me</h2>
      
      <p>
        <strong>Email:</strong>{" "}
        <a href="mailto:pragyasukrity2712@gmail.com" className="underline">
          pragyasukrity2712@gmail.com
        </a>
      </p>

      <p>
        <strong>Address:</strong> Pune, India
      </p>

      <p>
        <strong>LinkedIn:</strong>{" "}
        <a
          href="https://www.linkedin.com/in/pragya-sukrity/"
          target="_blank"
          rel="noreferrer"
          className="underline"
        >
          https://www.linkedin.com/in/pragya-sukrity/
        </a>
      </p>

      <p>
        <strong>GitHub:</strong>{" "}
        <a
          href="https://github.com/pragyasukrity007"
          target="_blank"
          rel="noreferrer"
          className="underline"
        >
          https://github.com/pragyasukrity007
        </a>
      </p>
    </div>
  );
}

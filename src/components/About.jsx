export default function About() {
  return (
    <div
      id="about"
      className="px-6 pt-10 mt-40 max-w-3xl mx-auto text-center"
    >
      <h2 className="text-center text-3xl md:text-5xl font-semibold mb-12">
        About Me
      </h2>

      <div className="my-5 flex justify-center align-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="text-blue-500" width="300" height="300" fill="currentColor" viewBox="0 0 16 16">
          <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"/>
        </svg>
      </div>
      <p className="text-gray-400 text-xl md:text-2xl text-left ml-2">
        I am a full-stack developer who focuses on solving real-world problems to make life efficient and fun.
        As well as a web developer incorporating modern architectures such as React and Vue, I have a deep passion for game development using Godot and Unity, 
        as I am also an indie game developer who strives for creativity, excitement, and commitment.
      </p>
      <br />
      <p className="text-gray-400 text-xl md:text-2xl text-left ml-2">
        With the philosophy of continuous improvement, I am committed to learning innovative technologies and utilizing them to enhance our lives. I would always love to learn new things and pick them up quickly. 
        Outside of my computer, I enjoy spending my time being physically active by working out and playing sports.
      </p>
    </div>
  );
}

export default async function SavedJokes() {
    return (
      // Outer container to center the content vertically and horizontally
      <main className="h-screen flex justify-center items-center p-8 w-full">
        {/* Inner container with max width 1200px and centered content */}
        <div className="flex flex-col items-center justify-center w-full max-w-5xl gap-4">
          <h1 className="text-5xl font-extrabold tracking-tight lg:text-6xl mb-2 text-center">
            Your Saved Jokes 💾
          </h1>
          {/* Additional content will be centered as well */}
        </div>
      </main>
    );
  }
  
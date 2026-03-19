const problemFiles = [
  '121_Best Time to Buy and Sell Stocks.js',
  '26-RemoveDuplicates.js',
  '27_Remove_Element.js',
  '344_Reverse_String.js',
  '485. Max Consecutive Ones.js',
  '88. Merge Sorted Array.js',
  'countDigit.js',
  'Factorial of n.js',
  'palindromProblems.js',
  'poweroftwo.js',
  'Recursion 101.js',
  'reverseInteger.js',
  'starPattern.js',
  'Sum of all numbers in Array.js',
  'Sum of first n numbers.js',
  'timeSpaceComplexity.js',
]

function App() {
  return (
    <main className="min-h-screen bg-stone-950 text-stone-100">
      <section className="mx-auto flex min-h-screen max-w-6xl flex-col gap-10 px-6 py-12 lg:px-10">
        <header className="rounded-[2rem] border border-amber-200/10 bg-[radial-gradient(circle_at_top_left,_rgba(251,191,36,0.24),_transparent_28%),linear-gradient(135deg,_rgba(28,25,23,0.95),_rgba(12,10,9,1))] p-8 shadow-2xl shadow-amber-950/20">
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-amber-300/80">
            React + Vite + Tailwind
          </p>
          <h1 className="font-display text-4xl leading-tight text-stone-50 md:text-6xl">
            Data Structures and Algorithms Workspace
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-7 text-stone-300 md:text-lg">
            This workspace now runs as a React project. Your existing JavaScript practice files stay in place,
            and the UI can grow into a tracker, problem browser, or notes dashboard.
          </p>
        </header>

        <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {problemFiles.map((fileName, index) => (
            <article
              key={fileName}
              className="group rounded-[1.5rem] border border-stone-800 bg-stone-900/70 p-5 transition duration-300 hover:-translate-y-1 hover:border-amber-300/40 hover:bg-stone-900"
            >
              <p className="text-xs uppercase tracking-[0.3em] text-stone-500">Problem {index + 1}</p>
              <h2 className="mt-3 text-lg font-semibold text-stone-100 group-hover:text-amber-200">
                {fileName.replace('.js', '')}
              </h2>
              <p className="mt-2 text-sm leading-6 text-stone-400">Source file: {fileName}</p>
            </article>
          ))}
        </section>
      </section>
    </main>
  )
}

export default App
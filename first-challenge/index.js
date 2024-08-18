/*
Challenge: Starting from scratch, build and render the
HTML for our main section.
*/

function MainContent() { // Child Component
  return (
      <div>
          <h1>Reasons I'm excited to learn React</h1>
          <ol>
              <li>It's a popular library, so I'll be
                  able to fit in with the cool kids!</li>
              <li>I'm more likely to get a job as a developer
                  if I know React</li>
          </ol>
      </div>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<MainContent />);

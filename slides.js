/**
 * upGrad School of Technology - JavaScript Workshop 2 Presentation Deck
 * Complete 42-Slide Content Data Structure
 */

const SLIDES_DATA = [
  // Slide 1
  {
    id: 1,
    section: "Intro",
    title: "JavaScript Workshop 2",
    subtitle: "Open Source Track",
    badge: "11",
    type: "cover",
    content: `
      <div class="cover-container">
        <div class="cover-badge">11</div>
        <h1 class="cover-title">JavaScript Workshop 2</h1>
        <p class="cover-subtitle">Open Source Track</p>
        <div class="cover-footer-tags">
          <span class="tag">DOM Manipulation</span>
          <span class="tag">Event Handling</span>
          <span class="tag">Interactive App</span>
        </div>
      </div>
    `,
    notes: "Welcome students to Workshop 2. Today we bridge raw JavaScript logic with the visual DOM to build a complete interactive Todo application."
  },

  // Slide 2
  {
    id: 2,
    section: "Overview",
    title: "What Are We Building?",
    subtitle: "Here's the destination before we start the journey — every topic today exists to build this one project.",
    type: "grid",
    content: `
      <div class="feature-grid-6">
        <div class="dark-card feature-card">
          <div class="card-icon red-glow">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="20" y1="8" x2="20" y2="14"></line><line x1="23" y1="11" x2="17" y2="11"></line></svg>
          </div>
          <h3>Add Task</h3>
          <p>Type a task and submit — it appears in the list instantly.</p>
        </div>
        <div class="dark-card feature-card">
          <div class="card-icon red-glow">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>
          </div>
          <h3>Delete Task</h3>
          <p>Click the delete icon on any task, even ones added after load, to remove it.</p>
        </div>
        <div class="dark-card feature-card">
          <div class="card-icon red-glow">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>
          </div>
          <h3>Mark Complete</h3>
          <p>Click a task to toggle a strikethrough style, marking it done.</p>
        </div>
        <div class="dark-card feature-card">
          <div class="card-icon red-glow">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
          </div>
          <h3>Validation</h3>
          <p>Empty or whitespace-only tasks are rejected with an inline error message.</p>
        </div>
        <div class="dark-card feature-card">
          <div class="card-icon red-glow">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
          </div>
          <h3>Dark Mode</h3>
          <p>One click toggles the whole page between light and dark themes.</p>
        </div>
        <div class="dark-card feature-card">
          <div class="card-icon red-glow">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
          </div>
          <h3>100% Vanilla JS</h3>
          <p>No framework, no build step — just HTML, Tailwind CSS, and JavaScript.</p>
        </div>
      </div>
    `,
    notes: "Emphasize to students that today's workshop is 100% practical. Every DOM concept we learn directly enables one of these 6 features."
  },

  // Slide 3
  {
    id: 3,
    section: "Foundations",
    title: "Why JavaScript Alone Isn't Enough",
    subtitle: "Understanding the bridge between code and what users see.",
    type: "concept",
    content: `
      <div class="two-column-layout">
        <div class="left-hero-text">
          <h2><span class="highlight-brand">JavaScript</span> lives in memory and <span class="highlight-dark">HTML</span> lives on the page. Something has to connect the two.</h2>
        </div>
        <div class="right-card dark-card">
          <div class="card-header-badge">HOW THE CONNECTION WORKS</div>
          <div class="vertical-timeline">
            <div class="timeline-step">
              <div class="step-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg></div>
              <div class="step-details">
                <h4>JavaScript</h4>
                <p>Variables, functions, and logic — running, but invisible</p>
              </div>
            </div>
            <div class="timeline-line"></div>
            <div class="timeline-step">
              <div class="step-icon active-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg></div>
              <div class="step-details">
                <h4>The DOM</h4>
                <p>The live bridge JavaScript uses to reach the page</p>
              </div>
            </div>
            <div class="timeline-line"></div>
            <div class="timeline-step">
              <div class="step-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg></div>
              <div class="step-details">
                <h4>Browser Display</h4>
                <p>What the user actually sees and clicks on</p>
              </div>
            </div>
          </div>
          <div class="card-footer-note">
            <em>JavaScript never edits HTML directly — it edits the DOM, and the browser repaints the result.</em>
          </div>
        </div>
      </div>
    `,
    notes: "Clarify to students that HTML files are static source code. Once loaded in browser memory, the browser constructs the live DOM object model tree."
  },

  // Slide 4
  {
    id: 4,
    section: "Foundations",
    title: "Nodes vs Elements",
    subtitle: "Understanding the difference between raw nodes and element nodes.",
    type: "concept",
    content: `
      <div class="two-column-layout">
        <div class="left-hero-text">
          <h2>Every element is a <span class="highlight-brand">node</span>, but not every node is an <span class="highlight-dark">element</span> — text, comments, and whitespace are nodes too.</h2>
        </div>
        <div class="right-card dark-card">
          <div class="card-header-badge">THE NODE FAMILY</div>
          <div class="vertical-timeline">
            <div class="timeline-step">
              <div class="step-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg></div>
              <div class="step-details">
                <h4>Element Node</h4>
                <p>A tag like <code>&lt;div&gt;</code> or <code>&lt;button&gt;</code> — what we manipulate almost all the time</p>
              </div>
            </div>
            <div class="timeline-line"></div>
            <div class="timeline-step">
              <div class="step-icon active-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg></div>
              <div class="step-details">
                <h4>Text Node</h4>
                <p>The words sitting inside a tag, counted as its own node</p>
              </div>
            </div>
            <div class="timeline-line"></div>
            <div class="timeline-step">
              <div class="step-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg></div>
              <div class="step-details">
                <h4>Comment Node</h4>
                <p>An HTML comment — part of the tree, invisible on the page</p>
              </div>
            </div>
          </div>
          <div class="card-footer-note">
            <em>In this workshop, "element" is the node type we use — it is the one with useful methods.</em>
          </div>
        </div>
      </div>
    `,
    notes: "Explain that `childNodes` includes text/comments, whereas `children` contains only HTML elements. We almost always want `children`."
  },

  // Slide 5
  {
    id: 5,
    section: "Foundations",
    title: "Parent, Child & Sibling",
    subtitle: "Navigating the DOM tree like a family tree.",
    type: "concept",
    content: `
      <div class="two-column-layout">
        <div class="left-hero-text">
          <h2>Think of the DOM like a <span class="highlight-brand">family tree</span> where every element has relatives, and JavaScript can walk between them.</h2>
        </div>
        <div class="right-card dark-card">
          <div class="card-header-badge">READING THE FAMILY TREE</div>
          <div class="vertical-timeline">
            <div class="timeline-step">
              <div class="step-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg></div>
              <div class="step-details">
                <h4>Parent</h4>
                <p><code>container</code> is the parent of everything nested one level inside it</p>
              </div>
            </div>
            <div class="timeline-line"></div>
            <div class="timeline-step">
              <div class="step-icon active-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg></div>
              <div class="step-details">
                <h4>Child</h4>
                <p><code>taskList</code> is a child of <code>container</code> — one level directly inside</p>
              </div>
            </div>
            <div class="timeline-line"></div>
            <div class="timeline-step">
              <div class="step-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg></div>
              <div class="step-details">
                <h4>Sibling</h4>
                <p>Two elements nested at the same level, inside the same parent</p>
              </div>
            </div>
          </div>
          <div class="card-footer-note">
            <code>const list = container.firstElementChild; // walks straight to the first child.</code>
          </div>
        </div>
      </div>
    `,
    notes: "Demonstrate `parentElement`, `children`, `nextElementSibling`, and `previousElementSibling` on the console."
  },

  // Slide 6
  {
    id: 6,
    section: "Foundations",
    title: "What Is the DOM?",
    subtitle: "The Document Object Model structure explained top to bottom.",
    type: "concept",
    content: `
      <div class="two-column-layout">
        <div class="left-hero-text">
          <h2>The <span class="highlight-brand">DOM</span> is the browser's tree that is built from your HTML, with every tag becoming a connected node.</h2>
        </div>
        <div class="right-card dark-card">
          <div class="card-header-badge">THE TREE, TOP TO BOTTOM</div>
          <div class="vertical-timeline">
            <div class="timeline-step">
              <div class="step-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg></div>
              <div class="step-details">
                <h4>document</h4>
                <p>The entry point into the whole tree</p>
              </div>
            </div>
            <div class="timeline-line"></div>
            <div class="timeline-step">
              <div class="step-icon active-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg></div>
              <div class="step-details">
                <h4>html → head / body</h4>
                <p>The root element and its two children</p>
              </div>
            </div>
            <div class="timeline-line"></div>
            <div class="timeline-step">
              <div class="step-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg></div>
              <div class="step-details">
                <h4>div → button</h4>
                <p>Nested elements, however deep your page goes</p>
              </div>
            </div>
          </div>
          <div class="card-footer-note">
            <em>JavaScript never edits HTML directly — it walks and edits this tree instead.</em>
          </div>
        </div>
      </div>
    `,
    notes: "Reiterate that `document` is the global object created by the browser window to give JS access to the page contents."
  },

  // Slide 7
  {
    id: 7,
    section: "DOM Deep Dive",
    title: "DOM Tree of a Product Catalog Webpage",
    subtitle: "The browser converts HTML into a hierarchical tree of nodes.",
    type: "diagram",
    content: `
      <div class="dom-tree-container">
        <div class="tree-legend">
          <span class="legend-item"><span class="color-dot root"></span> Root Node</span>
          <span class="legend-item"><span class="color-dot html-struct"></span> HTML Structural</span>
          <span class="legend-item"><span class="color-dot form-el"></span> Form Elements</span>
          <span class="legend-item"><span class="color-dot text-node"></span> Text Nodes</span>
          <span class="legend-item"><span class="color-dot prod-card"></span> Product Cards</span>
          <span class="legend-item"><span class="color-dot script-el"></span> Script</span>
        </div>
        
        <div class="interactive-tree">
          <div class="tree-level level-0">
            <div class="tree-node node-root"><span class="node-icon">🌳</span> Document</div>
          </div>
          <div class="tree-connector-v"></div>
          <div class="tree-level level-1">
            <div class="tree-node node-struct">&lt;/&gt; html</div>
          </div>
          <div class="tree-connector-v"></div>
          <div class="tree-level level-2">
            <div class="tree-branch">
              <div class="tree-node node-struct">&lt;/&gt; head</div>
              <div class="sub-nodes">
                <div class="tree-node node-struct">&lt;/&gt; meta</div>
                <div class="tree-node node-text">T title "Product Catalog"</div>
                <div class="tree-node node-struct">&lt;/&gt; link (CSS)</div>
              </div>
            </div>
            <div class="tree-branch">
              <div class="tree-node node-struct">&lt;/&gt; body</div>
              <div class="sub-nodes">
                <div class="tree-node node-struct">&lt;/&gt; nav (h1, button)</div>
                <div class="tree-node node-form">&lt;/&gt; section (Search input, select)</div>
                <div class="tree-node node-prod">&lt;/&gt; div#product-grid</div>
                <div class="tree-node node-script">&lt;/&gt; script (JS)</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `,
    notes: "Walk students through this hierarchical tree layout. Show how nested HTML tags form parent-child branches."
  },

  // Slide 8
  {
    id: 8,
    section: "DOM Deep Dive",
    title: "Understanding the DOM Tree",
    subtitle: "The DOM (Document Object Model) represents an HTML document as a tree of nodes.",
    type: "concept",
    content: `
      <div class="two-column-layout">
        <div class="left-card light-card tree-preview-card">
          <div class="badge-header"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon></svg> Simplified DOM Tree</div>
          <ul class="tree-outline">
            <li><span class="node-badge root">Document</span></li>
            <li class="indent-1"><span class="node-badge html">&lt;/&gt; html</span></li>
            <li class="indent-2"><span class="node-badge head">&lt;/&gt; head</span></li>
            <li class="indent-2"><span class="node-badge body">&lt;/&gt; body</span></li>
            <li class="indent-3"><span class="node-badge nav">&lt;/&gt; nav</span></li>
            <li class="indent-3"><span class="node-badge section">&lt;/&gt; section</span></li>
            <li class="indent-3"><span class="node-badge main">&lt;/&gt; main</span></li>
            <li class="indent-4"><span class="node-badge grid">&lt;/&gt; product-grid</span></li>
            <li class="indent-5"><span class="node-badge card">&lt;/&gt; article.product-card</span></li>
          </ul>
        </div>

        <div class="right-card breakdown-list">
          <div class="node-item">
            <span class="item-badge green">Document</span>
            <p>Represents the complete webpage loaded by the browser.</p>
          </div>
          <div class="node-item">
            <span class="item-badge blue">html</span>
            <p>Root HTML element.</p>
          </div>
          <div class="node-item">
            <span class="item-badge blue">head</span>
            <p>Contains metadata, title, CSS links.</p>
          </div>
          <div class="node-item">
            <span class="item-badge blue">body</span>
            <p>Contains everything visible on the webpage.</p>
          </div>
          <div class="node-item">
            <span class="item-badge purple">input / select / button</span>
            <p>Interactive form elements.</p>
          </div>
          <div class="node-item">
            <span class="item-badge pink">article.product-card</span>
            <p>Each product is an independent DOM subtree.</p>
          </div>
          <div class="node-item">
            <span class="item-badge grey">script</span>
            <p>JavaScript adds interactivity to the page.</p>
          </div>
        </div>
      </div>
      <div class="bottom-takeaway-banner">
        <div class="banner-icon">💡</div>
        <div class="banner-text"><strong>Key Takeaway:</strong> JavaScript can traverse, select, create, modify, and remove any node in this DOM tree using the DOM API.</div>
      </div>
    `,
    notes: "Highlight that every HTML element loaded becomes an object (node) in JavaScript memory."
  },

  // Slide 9
  {
    id: 9,
    section: "Selection",
    title: "Selecting Elements",
    subtitle: "Connecting CSS selectors to JavaScript variables.",
    type: "concept",
    content: `
      <div class="two-column-layout">
        <div class="left-hero-text">
          <h2><span class="highlight-brand">querySelector()</span> turns a CSS selector (an id, a class, a tag) into a real JavaScript variable.</h2>
        </div>
        <div class="right-card dark-card">
          <div class="card-header-badge">FROM HTML TO A VARIABLE</div>
          <div class="vertical-timeline">
            <div class="timeline-step">
              <div class="step-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg></div>
              <div class="step-details">
                <h4>HTML</h4>
                <p>The element already sitting in the page</p>
              </div>
            </div>
            <div class="timeline-line"></div>
            <div class="timeline-step">
              <div class="step-icon active-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg></div>
              <div class="step-details">
                <h4>querySelector()</h4>
                <p>Finds the first match for that selector</p>
              </div>
            </div>
            <div class="timeline-line"></div>
            <div class="timeline-step">
              <div class="step-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg></div>
              <div class="step-details">
                <h4>JS Variable</h4>
                <p>A reference you can read from and write to</p>
              </div>
            </div>
          </div>
          <div class="card-footer-note">
            <code>const taskInput = document.querySelector('#taskInput');</code>
          </div>
        </div>
      </div>
    `,
    notes: "Remind students that `querySelector` takes standard CSS selector strings — exactly like writing CSS rules."
  },

  // Slide 10
  {
    id: 10,
    section: "Selection",
    title: "Common Selection Mistakes",
    subtitle: "One missing character is the difference between a working line and a silent null.",
    type: "code-comparison",
    content: `
      <div class="code-comparison-grid">
        <div class="comparison-card wrong-card">
          <div class="card-status-header">
            <span class="status-icon red-x">❌</span>
            <div>
              <h4>Wrong</h4>
              <p>Missing <code>#</code> — browser looks for tag <code>&lt;taskInput&gt;</code> (which doesn't exist).</p>
            </div>
          </div>
          <div class="terminal-box">
            <div class="terminal-header"><span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span> app.js</div>
            <pre><code><span class="code-keyword">const</span> input = document.<span class="code-func">querySelector</span>(<span class="code-str">'taskInput'</span>);
console.<span class="code-func">log</span>(input); <span class="code-comment">// null</span></code></pre>
          </div>
          <div class="output-preview error-output">
            <span class="out-label">Output</span>
            <code>null</code>
            <p class="out-explain">Why? Because there is no <code>&lt;taskInput&gt;</code> HTML tag on the page.</p>
          </div>
        </div>

        <div class="comparison-card correct-card">
          <div class="card-status-header">
            <span class="status-icon green-check">✓</span>
            <div>
              <h4>Correct</h4>
              <p>Using <code>#</code> tells the browser to find the element with <code>id="taskInput"</code>.</p>
            </div>
          </div>
          <div class="terminal-box">
            <div class="terminal-header"><span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span> app.js</div>
            <pre><code><span class="code-keyword">const</span> input = document.<span class="code-func">querySelector</span>(<span class="code-str">'#taskInput'</span>);
console.<span class="code-func">log</span>(input);       <span class="code-comment">// &lt;input id="taskInput" ...&gt;</span>
console.<span class="code-func">log</span>(input.value); <span class="code-comment">// Learn JavaScript</span></code></pre>
          </div>
          <div class="output-preview success-output">
            <span class="out-label">Output</span>
            <code>&lt;input id="taskInput" type="text" value="Learn JavaScript"&gt;</code>
            <code>Learn JavaScript</code>
          </div>
        </div>
      </div>

      <div class="bottom-takeaway-banner quick-rule-banner">
        <div class="banner-icon">💡</div>
        <div class="banner-text">
          <strong>Quick Rule:</strong> 
          <span class="rule-chip"><code>#</code> Select by ID: <code>querySelector('#id')</code></span>
          <span class="rule-chip"><code>.</code> Select by Class: <code>querySelector('.class')</code></span>
          <span class="rule-chip">No symbol Select by Tag: <code>querySelector('button')</code></span>
        </div>
      </div>
    `,
    notes: "This is the single most common bug for beginners: forgetting `#` for IDs or `.` for classes!"
  },

  // Slide 11
  {
    id: 11,
    section: "Selection",
    title: "NodeList vs Array",
    subtitle: "Understanding why querySelectorAll returns a NodeList.",
    type: "concept",
    content: `
      <div class="two-column-layout">
        <div class="left-hero-text">
          <h2><span class="highlight-brand">querySelectorAll</span> returns something that looks like an array, but is not quite one.</h2>
        </div>
        <div class="right-card dark-card">
          <div class="card-header-badge">TWO LOOKALIKES</div>
          <div class="vertical-timeline">
            <div class="timeline-step">
              <div class="step-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg></div>
              <div class="step-details">
                <h4>NodeList</h4>
                <p>What querySelectorAll returns — has <code>forEach</code>, but not <code>map</code> or <code>filter</code></p>
              </div>
            </div>
            <div class="timeline-line"></div>
            <div class="timeline-step">
              <div class="step-icon active-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg></div>
              <div class="step-details">
                <h4>Array.from()</h4>
                <p>Converts a NodeList into a real array, unlocking every array method</p>
              </div>
            </div>
            <div class="timeline-line"></div>
            <div class="timeline-step">
              <div class="step-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg></div>
              <div class="step-details">
                <h4>Live vs Static</h4>
                <p>Most NodeLists are static — they do not update when the DOM changes later</p>
              </div>
            </div>
          </div>
          <div class="card-footer-note">
            <code>const tasks = Array.from(document.querySelectorAll('.task'));</code>
          </div>
        </div>
      </div>
    `,
    notes: "Explain that `Array.from(document.querySelectorAll(...))` allows array methods like `.map()`, `.filter()`, and `.reduce()`."
  },

  // Slide 12
  {
    id: 12,
    section: "Selection",
    title: "querySelector() vs querySelectorAll()",
    subtitle: "Both use CSS selectors—but they return different results.",
    type: "comparison",
    content: `
      <div class="two-column-layout">
        <div class="light-card selector-card">
          <div class="selector-header red-header">
            <div class="target-icon">🎯</div>
            <h3>querySelector()</h3>
          </div>
          <ul class="feature-bullets">
            <li><span class="bullet-dot red"></span> Returns the <strong>first</strong> matching element</li>
            <li><span class="bullet-dot red"></span> Return type: <code>Element</code></li>
            <li><span class="bullet-dot red"></span> Returns <code>null</code> if nothing matches</li>
          </ul>
          <div class="mini-terminal">
            <code>const btn = document.querySelector(".btn");</code>
          </div>
          <div class="html-reference">
            <code>&lt;button class="btn"&gt;Save&lt;/button&gt;</code>
            <code>&lt;button class="btn"&gt;Delete&lt;/button&gt;</code>
          </div>
          <div class="result-badge success">✓ Save button is selected.</div>
        </div>

        <div class="light-card selector-card">
          <div class="selector-header green-header">
            <div class="target-icon">📑</div>
            <h3>querySelectorAll()</h3>
          </div>
          <ul class="feature-bullets">
            <li><span class="bullet-dot green"></span> Returns <strong>all</strong> matching elements</li>
            <li><span class="bullet-dot green"></span> Return type: <code>NodeList</code></li>
            <li><span class="bullet-dot green"></span> Returns an empty <code>NodeList</code> if nothing matches</li>
          </ul>
          <div class="mini-terminal">
            <code>const buttons = document.querySelectorAll(".btn");</code>
          </div>
          <div class="html-reference">
            <code>&lt;button class="btn"&gt;Save&lt;/button&gt;</code>
            <code>&lt;button class="btn"&gt;Delete&lt;/button&gt;</code>
          </div>
          <div class="result-badge success">✓ Save and Delete buttons are selected.</div>
        </div>
      </div>

      <div class="bottom-takeaway-banner">
        <div class="banner-icon">⚖️</div>
        <div class="banner-text">
          <strong>Remember:</strong> <code>querySelector()</code> → One Element &nbsp;|&nbsp; <code>querySelectorAll()</code> → Many Elements (NodeList)
        </div>
      </div>
    `,
    notes: "Ask students: If there are 5 buttons with `.btn`, what does `querySelector('.btn')` return? (Only the first button)."
  },

  // Slide 13
  {
    id: 13,
    section: "Checkpoint",
    title: "Checkpoint : Foundations",
    subtitle: "Before moving on, confirm this is working in your file.",
    type: "checkpoint",
    content: `
      <div class="checkpoint-grid">
        <div class="checkpoint-card objective-card">
          <div class="cp-header">
            <span class="cp-icon red-circle">●</span>
            <h3>Objective</h3>
          </div>
          <p>Select <code>#taskForm</code>, <code>#taskInput</code>, and <code>#taskList</code> with <code>querySelector</code>, and log each one to the console.</p>
        </div>

        <div class="checkpoint-card output-card">
          <div class="cp-header">
            <span class="cp-icon yellow-circle">●</span>
            <h3>Expected Output</h3>
          </div>
          <p>DevTools console shows the real DOM element for each variable — <strong>never null</strong>.</p>
        </div>
      </div>
    `,
    notes: "Give students 3 minutes to test this in their editor console. Circulate to check for null errors."
  },

  // Slide 14
  {
    id: 14,
    section: "User Input",
    title: "Reading User Input",
    subtitle: "Extracting typed text from input elements.",
    type: "concept",
    content: `
      <div class="two-column-layout">
        <div class="left-hero-text">
          <h2><span class="highlight-brand">.value</span> holds what the user typed, not the <code>textContent</code>, and not the HTML itself.</h2>
        </div>
        <div class="right-card dark-card">
          <div class="card-header-badge">FROM KEYSTROKE TO VARIABLE</div>
          <div class="vertical-timeline">
            <div class="timeline-step">
              <div class="step-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg></div>
              <div class="step-details">
                <h4>User Types</h4>
                <p>Characters land inside the input box</p>
              </div>
            </div>
            <div class="timeline-line"></div>
            <div class="timeline-step">
              <div class="step-icon active-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg></div>
              <div class="step-details">
                <h4>.value</h4>
                <p>The input element's live, current text</p>
              </div>
            </div>
            <div class="timeline-line"></div>
            <div class="timeline-step">
              <div class="step-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg></div>
              <div class="step-details">
                <h4>JavaScript</h4>
                <p>input.value reads exactly what is there right now</p>
              </div>
            </div>
          </div>
          <div class="card-footer-note">
            <code>Example: const text = input.value;</code>
          </div>
        </div>
      </div>
    `,
    notes: "Crucial distinction: `.textContent` is for standard tags like `<div>` or `<p>`. `.value` is strictly for form elements like `<input>` and `<textarea>`."
  },

  // Slide 15
  {
    id: 15,
    section: "User Input",
    title: "Working with .value",
    subtitle: "Read what the user typed.",
    type: "demo",
    content: `
      <div class="two-column-layout">
        <div class="light-card form-mockup-card">
          <div class="form-group">
            <label>Name</label>
            <div class="input-with-icon">
              <span class="icon">👤</span>
              <input type="text" value="Alice" readonly />
            </div>
          </div>
          <div class="form-group">
            <label>Message</label>
            <div class="input-with-icon">
              <span class="icon">💬</span>
              <input type="text" value="Hello!" readonly />
            </div>
          </div>
          <div class="value-flow-indicator">
            <span class="badge-pink">User types</span>
            <span class="arrow">➔</span>
            <span class="badge-green">.value stores text</span>
          </div>
        </div>

        <div class="terminal-and-output">
          <div class="terminal-box">
            <div class="terminal-header"><span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span> app.js</div>
            <pre><code><span class="code-keyword">const</span> input = document.<span class="code-func">querySelector</span>(<span class="code-str">"#name"</span>);

console.<span class="code-func">log</span>(input.value);</code></pre>
          </div>
          <div class="output-preview success-output large-out">
            <span class="out-label">🖥️ Output</span>
            <div class="big-output-text">Alice</div>
          </div>
        </div>
      </div>
      <div class="bottom-takeaway-banner">
        <div class="banner-icon">💡</div>
        <div class="banner-text"><strong>.value</strong> gives the current value of form elements.</div>
      </div>
    `,
    notes: "Demonstrate reading form values dynamically during live coding."
  },

  // Slide 16
  {
    id: 16,
    section: "User Input",
    title: "Reading vs Updating .value",
    subtitle: "You can both get and change an input's value.",
    type: "comparison",
    content: `
      <div class="two-column-layout">
        <div class="light-card mode-card read-mode">
          <div class="mode-header blue-header">
            <span class="icon">👁️</span>
            <h3>Read</h3>
          </div>
          <div class="mini-terminal">
            <code>console.log(input.value);</code>
          </div>
          <div class="result-box">
            <span class="res-label">Result:</span>
            <div class="big-result-pill">Alice</div>
          </div>
        </div>

        <div class="light-card mode-card update-mode">
          <div class="mode-header green-header">
            <span class="icon">✏️</span>
            <h3>Update</h3>
          </div>
          <div class="mini-terminal">
            <code>input.value = "John";</code>
          </div>
          <div class="transformation-box">
            <span class="pill-old">Alice</span>
            <span class="down-arrow">⬇</span>
            <span class="pill-new">John</span>
          </div>
        </div>
      </div>

      <div class="bottom-takeaway-banner split-rule-banner">
        <div class="banner-icon">💡</div>
        <div class="banner-text">
          <span><strong>Read:</strong> <code>input.value</code></span>
          <span class="divider">|</span>
          <span><strong>Write:</strong> <code>input.value = "..."</code></span>
        </div>
      </div>
    `,
    notes: "Show how setting `input.value = ''` clears an input field after task creation."
  },

  // Slide 17
  {
    id: 17,
    section: "Events",
    title: "Predict the Output",
    subtitle: "Before running the code, reason about what the event object contains.",
    type: "quiz",
    content: `
      <div class="two-column-layout">
        <div class="left-card code-ref-card">
          <div class="badge-header red-badge">&lt;/&gt; The Code</div>
          <div class="terminal-box">
            <pre><code>form.<span class="code-func">addEventListener</span>(<span class="code-str">'submit'</span>, (e) => {
  console.<span class="code-func">log</span>(e.target);
});</code></pre>
          </div>
          <div class="html-ref-box">
            <span class="ref-label">HTML (for reference)</span>
            <pre><code>&lt;form id="myForm"&gt;
  &lt;input type="text" name="name" placeholder="Enter your name"&gt;
  &lt;button type="submit"&gt;Submit&lt;/button&gt;
&lt;/form&gt;</code></pre>
          </div>
        </div>

        <div class="right-card quiz-discussion-card">
          <div class="badge-header green-badge">💬 Your Prediction</div>
          <ul class="prediction-questions">
            <li>
              <span class="q-num">?</span>
              <p>What will <code>console.log(e.target)</code> display when the form is submitted?</p>
            </li>
            <li>
              <span class="q-num">👤</span>
              <p>Which element has the event listener attached?</p>
            </li>
            <li>
              <span class="q-num">🎯</span>
              <p>Which element will become <code>e.target</code>?</p>
            </li>
          </ul>
          <div class="interactive-reveal-box">
            <button class="reveal-btn" onclick="toggleAnswer(17)">Reveal Answer & Explanation</button>
            <div id="answer-17" class="hidden-answer">
              <strong>Answer:</strong> <code>e.target</code> will log <code>&lt;form id="myForm"&gt;...&lt;/form&gt;</code> because the submit event fires on the form container!
            </div>
          </div>
        </div>
      </div>
    `,
    notes: "Pause for 2 minutes for Think-Pair-Share with student partners."
  },

  // Slide 18
  {
    id: 18,
    section: "Events",
    title: "Three Ways to Handle Events",
    subtitle: "There are multiple ways to respond to user actions in JavaScript.",
    type: "grid",
    content: `
      <div class="three-column-grid">
        <div class="event-method-card bad-method">
          <div class="num-badge red">1</div>
          <h3>HTML Attribute</h3>
          <div class="code-snippet-box">
            <code>&lt;button onclick="sayHello()"&gt;</code>
          </div>
          <div class="method-icon red-icon">⚠️</div>
          <div class="method-tag warning">JavaScript inside HTML</div>
        </div>

        <div class="event-method-card ok-method">
          <div class="num-badge orange">2</div>
          <h3>on-property</h3>
          <div class="code-snippet-box">
            <code>button.onclick = sayHello;</code>
          </div>
          <div class="method-icon orange-icon">👍</div>
          <div class="method-tag warning">One event handler limit</div>
        </div>

        <div class="event-method-card best-method">
          <div class="num-badge green">3</div>
          <h3>addEventListener()</h3>
          <div class="code-snippet-box">
            <code>button.addEventListener("click", sayHello);</code>
          </div>
          <div class="method-icon green-icon">⭐</div>
          <div class="method-tag success">Modern Best Practice</div>
        </div>
      </div>

      <div class="bottom-takeaway-banner">
        <div class="banner-icon">💡</div>
        <div class="banner-text"><strong>Key Takeaway:</strong> All three listen for events, but <code>addEventListener()</code> is the modern and recommended approach for real-world applications.</div>
      </div>
    `,
    notes: "Highlight why `addEventListener()` wins: it allows multiple handlers, works cleanly with external JS files, and supports event options."
  },

  // Slide 19
  {
    id: 19,
    section: "Events",
    title: "Events",
    subtitle: "Understanding the asynchronous event loop flow.",
    type: "flow",
    content: `
      <div class="flow-steps-grid">
        <div class="flow-step-card">
          <div class="step-header">01</div>
          <div class="step-circle-icon">📖</div>
          <h3>User Click</h3>
          <p>Something happens on the page — a click, a keystroke, a submit</p>
        </div>
        <div class="flow-arrow">➔</div>

        <div class="flow-step-card">
          <div class="step-header">02</div>
          <div class="step-circle-icon">📑</div>
          <h3>Event Fires</h3>
          <p>The browser creates an event object describing what just happened</p>
        </div>
        <div class="flow-arrow">➔</div>

        <div class="flow-step-card">
          <div class="step-header">03</div>
          <div class="step-circle-icon">💬</div>
          <h3>JavaScript Reacts</h3>
          <p>Your callback function runs, using the event object's details</p>
        </div>
        <div class="flow-arrow">➔</div>

        <div class="flow-step-card">
          <div class="step-header">04</div>
          <div class="step-circle-icon">🔖</div>
          <h3>DOM Update</h3>
          <p>The page changes on screen — that is the whole loop</p>
        </div>
      </div>

      <div class="big-idea-dark-bar">
        <span class="icon-circle">🎯</span>
        <span><strong>Big idea:</strong> applications spend most of their time simply waiting for something to happen.</span>
      </div>
    `,
    notes: "Connect this flow to event-driven programming architecture."
  },

  // Slide 20
  {
    id: 20,
    section: "Events",
    title: "addEventListener()",
    subtitle: "Three pieces, one line — connect user actions to your code.",
    type: "concept",
    content: `
      <div class="two-column-layout">
        <div class="left-card piece-breakdown-card">
          <div class="piece-item red-item">
            <span class="p-num">1</span>
            <div>
              <h4>1. The Listener</h4>
              <p>The element you want to watch (e.g., a button).</p>
            </div>
          </div>
          <div class="piece-item pink-item">
            <span class="p-num">2</span>
            <div>
              <h4>2. The Event</h4>
              <p>The string that names the event (e.g., <code>'click'</code>).</p>
            </div>
          </div>
          <div class="piece-item orange-item">
            <span class="p-num">3</span>
            <div>
              <h4>3. The Callback</h4>
              <p>The function that runs every time the event fires.</p>
            </div>
          </div>
        </div>

        <div class="right-card code-and-visual">
          <div class="terminal-box syntax-breakdown">
            <div class="terminal-header"><span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span> THE LINE</div>
            <pre><code><span class="highlight-listener">button</span>.<span class="code-func">addEventListener</span>(<span class="highlight-event">'click'</span>, <span class="highlight-callback">function () {
  alert('Button clicked!');
}</span>);</code></pre>
          </div>

          <div class="visual-example-box">
            <div class="box-title">VISUAL EXAMPLE</div>
            <div class="visual-flow">
              <code>&lt;button id="myBtn"&gt;Click Me&lt;/button&gt;</code>
              <span class="arr">➔</span>
              <button class="demo-btn">Click Me</button>
              <span class="arr">➔</span>
              <span class="alert-mock">✓ Alert: Button clicked!</span>
            </div>
          </div>
        </div>
      </div>
      <div class="bottom-takeaway-banner">
        <div class="banner-icon">💡</div>
        <div class="banner-text"><strong>Remember:</strong> <code>addEventListener()</code> is the modern, recommended way to handle events.</div>
      </div>
    `,
    notes: "Deconstruct the 3 parameters: target element, event string name, callback function reference."
  },

  // Slide 21
  {
    id: 21,
    section: "Events",
    title: "The Event Object",
    subtitle: "Every event listener automatically receives an Event object.",
    type: "grid",
    content: `
      <div class="three-column-grid">
        <div class="light-card event-obj-card">
          <div class="icon-header red-icon"><span class="icon">🖱️</span> Mouse Click</div>
          <button class="demo-btn-red">Click Me 🖱️</button>
          <div class="mini-terminal">
            <code>button.addEventListener("click", (event) => { console.log(event.target); });</code>
          </div>
          <div class="card-footer-alert red-alert">
            <strong>event.target:</strong> The element that was clicked.
          </div>
        </div>

        <div class="light-card event-obj-card">
          <div class="icon-header orange-icon"><span class="icon">📑</span> Form Submit</div>
          <div class="mini-form">
            <input type="text" placeholder="Email" readonly />
            <input type="password" placeholder="Password" readonly />
            <button class="demo-btn-orange">Submit 🚀</button>
          </div>
          <div class="card-footer-alert orange-alert">
            <strong>preventDefault():</strong> Stops the browser's default refresh action.
          </div>
        </div>

        <div class="light-card event-obj-card">
          <div class="icon-header purple-icon"><span class="icon">📦</span> What's Inside Event?</div>
          <ul class="event-props-list">
            <li><span class="prop-icon">🎯</span> <code>target</code></li>
            <li><span class="prop-icon">🏷️</span> <code>type</code></li>
            <li><span class="prop-icon">📍</span> <code>currentTarget</code></li>
            <li><span class="prop-icon">🚫</span> <code>preventDefault()</code></li>
          </ul>
        </div>
      </div>

      <div class="bottom-takeaway-banner">
        <div class="banner-icon">💡</div>
        <div class="banner-text"><strong>Remember:</strong> The browser automatically creates the Event object and passes it to every event listener callback.</div>
      </div>
    `,
    notes: "Emphasize `e.preventDefault()` when working with forms to prevent page reloads."
  },

  // Slide 22
  {
    id: 22,
    section: "Events Quiz",
    title: "Predict the Output",
    subtitle: "Don't run the code yet. Discuss with your partner first.",
    type: "interactive-quiz",
    content: `
      <div class="two-column-layout">
        <div class="left-card code-ref-card">
          <div class="terminal-box">
            <div class="terminal-header"><span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span> JavaScript</div>
            <pre><code>form.<span class="code-func">addEventListener</span>(<span class="code-str">"submit"</span>, (e) => {
  console.<span class="code-func">log</span>(e.target);
});</code></pre>
          </div>
          <div class="form-preview-card">
            <div class="field"><span class="icon">👤</span> <span class="lbl">Name</span> <input type="text" readonly /></div>
            <div class="field"><span class="icon">✉️</span> <span class="lbl">Email</span> <input type="text" readonly /></div>
            <button class="demo-submit-blue">✈️ Submit</button>
          </div>
        </div>

        <div class="right-card quiz-options-card">
          <h3>What gets printed?</h3>
          <div class="quiz-options-list">
            <button class="quiz-opt" onclick="checkQuiz(22, 'A', true)">
              <span class="opt-letter letter-a">A</span>
              <code>&lt;form&gt;</code>
            </button>
            <button class="quiz-opt" onclick="checkQuiz(22, 'B', false)">
              <span class="opt-letter letter-b">B</span>
              <code>&lt;button&gt;</code>
            </button>
            <button class="quiz-opt" onclick="checkQuiz(22, 'C', false)">
              <span class="opt-letter letter-c">C</span>
              <code>&lt;input&gt;</code>
            </button>
            <button class="quiz-opt" onclick="checkQuiz(22, 'D', false)">
              <span class="opt-letter letter-d">D</span>
              <code>undefined</code>
            </button>
          </div>
          <div id="quiz-result-22" class="quiz-feedback-box"></div>
          
          <div class="tps-box">
            <div class="tps-icon">💬</div>
            <div>
              <strong>Think ➔ Pair ➔ Share</strong>
              <p>Discuss with your neighbour before revealing the answer.</p>
            </div>
          </div>
        </div>
      </div>
    `,
    notes: "Answer is A. The event listener is attached to `form`, so submitting the form passes the `<form>` element as `e.target`."
  },

  // Slide 23
  {
    id: 23,
    section: "Events",
    title: "Common DOM Events",
    subtitle: "The four events you'll use most often when building interactive web pages.",
    type: "grid",
    content: `
      <div class="two-column-grid-2x2">
        <div class="light-card event-type-card">
          <div class="event-tag red">click</div>
          <div class="event-demo">
            <button class="demo-btn-red">Submit 🖱️</button>
          </div>
          <h4>When it fires:</h4>
          <p>When the user clicks a button, link, icon, or any clickable element.</p>
          <code>button.addEventListener("click", ...);</code>
        </div>

        <div class="light-card event-type-card">
          <div class="event-tag red">input</div>
          <div class="event-demo">
            <input type="text" value="John|" class="input-demo" readonly />
          </div>
          <h4>When it fires:</h4>
          <p>Every time the value inside an input changes.</p>
          <code>input.addEventListener("input", ...);</code>
        </div>

        <div class="light-card event-type-card">
          <div class="event-tag red">submit</div>
          <div class="event-demo">
            <span class="form-icon">📑✈️</span>
          </div>
          <h4>When it fires:</h4>
          <p>When a form is submitted.</p>
          <code>form.addEventListener("submit", ...);</code>
        </div>

        <div class="light-card event-type-card">
          <div class="event-tag red">keydown</div>
          <div class="event-demo">
            <span class="kbd-key">Enter ↵</span>
          </div>
          <h4>When it fires:</h4>
          <p>Whenever a keyboard key is pressed.</p>
          <code>document.addEventListener("keydown", ...);</code>
        </div>
      </div>

      <div class="bottom-takeaway-banner multi-mapping">
        <div class="banner-icon">💡</div>
        <div class="banner-text">
          <span>🖱️ Mouse ➔ <code>click</code></span>
          <span>⌨️ Keyboard ➔ <code>keydown</code></span>
          <span>🅰️ Text fields ➔ <code>input</code></span>
          <span>📄 Forms ➔ <code>submit</code></span>
        </div>
      </div>
    `,
    notes: "Review these 4 core events with the class."
  },

  // Slide 24
  {
    id: 24,
    section: "Checkpoint",
    title: "Checkpoint: Handle Form Submit",
    subtitle: "Can you stop the page from refreshing and capture the user's input?",
    type: "checkpoint",
    content: `
      <div class="two-column-layout">
        <div class="left-card browser-form-mockup">
          <div class="browser-bar"><span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span> Contact Form</div>
          <div class="form-body">
            <label>Name</label>
            <input type="text" value="Alice" readonly />
            <button class="demo-submit-red">✈️ Submit</button>
          </div>
        </div>

        <div class="right-card code-starter-card">
          <div class="terminal-box">
            <div class="terminal-header"><span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span> JavaScript</div>
            <pre><code>form.<span class="code-func">addEventListener</span>(<span class="code-str">"submit"</span>, (e) => {
  <span class="code-comment">// Complete the code</span>
  
});</code></pre>
          </div>
        </div>
      </div>

      <div class="bottom-checkpoint-tasks">
        <div class="task-box">
          <h3>🎯 Your Task</h3>
          <ul>
            <li><span class="chk">✓</span> Prevent the page from refreshing.</li>
            <li><span class="chk">✓</span> Print the typed name in the console.</li>
          </ul>
        </div>
        <div class="tps-box mini">
          <strong>Think ➔ Pair ➔ Share:</strong> Discuss your solution with your neighbour before running the code.
        </div>
      </div>
    `,
    notes: "Solution hint: `e.preventDefault(); const name = input.value; console.log(name);`."
  },

  // Slide 25
  {
    id: 25,
    section: "DOM Manipulation",
    title: "Creating Elements",
    subtitle: "Creating an element and displaying it are two separate steps.",
    type: "flow",
    content: `
      <div class="three-step-pipeline">
        <div class="pipeline-card step-1">
          <div class="step-num blue">1</div>
          <h3>Create</h3>
          <p>Browser Memory (Not visible yet)</p>
          <div class="code-box">
            <code>const card = document.createElement("div");</code>
          </div>
          <div class="status-note">⚡ Element created in memory.</div>
        </div>

        <div class="pipeline-arrow">➔</div>

        <div class="pipeline-card step-2">
          <div class="step-num orange">2</div>
          <h3>Configure</h3>
          <p>Set content & classes</p>
          <div class="code-box">
            <code>card.textContent = "Running Shoes";</code>
          </div>
          <div class="status-note">✏️ Add content and styling before displaying it.</div>
        </div>

        <div class="pipeline-arrow">➔</div>

        <div class="pipeline-card step-3">
          <div class="step-num green">3</div>
          <h3>Display</h3>
          <p>Append to page</p>
          <div class="code-box">
            <code>document.body.appendChild(card);</code>
          </div>
          <div class="status-note">👁️ Now the element becomes visible on the page.</div>
        </div>
      </div>

      <div class="bottom-takeaway-banner">
        <div class="banner-icon">💡</div>
        <div class="banner-text"><strong>Remember:</strong> <code>Create ➔ Configure ➔ Append</code> (Nothing appears on the webpage until you append the element).</div>
      </div>
    `,
    notes: "Analogy: Building a house offline in a workshop before physically placing it on the property."
  },

  // Slide 26
  {
    id: 26,
    section: "DOM Manipulation",
    title: "Add Task Workflow",
    subtitle: "Every new task follows the same four-step process.",
    type: "flow",
    content: `
      <div class="four-step-workflow">
        <div class="wf-card">
          <div class="wf-num red">1</div>
          <h4>Read Input</h4>
          <p>Read the user's text.</p>
          <code>input.value.trim()</code>
        </div>
        <div class="wf-arr">➔</div>
        <div class="wf-card">
          <div class="wf-num orange">2</div>
          <h4>Validate</h4>
          <p>Ignore empty tasks.</p>
          <code>if (!text) return;</code>
        </div>
        <div class="wf-arr">➔</div>
        <div class="wf-card">
          <div class="wf-num blue">3</div>
          <h4>Create Element</h4>
          <p>Create task in memory.</p>
          <code>document.createElement("li")</code>
        </div>
        <div class="wf-arr">➔</div>
        <div class="wf-card">
          <div class="wf-num green">4</div>
          <h4>Show on Page</h4>
          <p>Display and clear input.</p>
          <code>list.appendChild(task);</code>
        </div>
      </div>

      <div class="bottom-takeaway-banner">
        <div class="banner-icon">💡</div>
        <div class="banner-text"><strong>Remember:</strong> <code>Read ➔ Validate ➔ Create ➔ Append</code> — Nothing appears until appended to DOM.</div>
      </div>
    `,
    notes: "Walk through these 4 steps which constitute the core `addTask()` function."
  },

  // Slide 27
  {
    id: 27,
    section: "Validation",
    title: "Will this task be added?",
    subtitle: "Predict which inputs should appear in the Todo List.",
    type: "quiz",
    content: `
      <div class="two-column-layout">
        <div class="left-card test-cases-table">
          <table class="prediction-table">
            <thead>
              <tr>
                <th>Input</th>
                <th>Added?</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>"Buy Milk"</code></td>
                <td><span class="badge-success">✓ Yes</span></td>
              </tr>
              <tr>
                <td><code>"   "</code></td>
                <td><span class="badge-danger">❌ No</span></td>
              </tr>
              <tr>
                <td><code>"Learn JS"</code></td>
                <td><span class="badge-success">✓ Yes</span></td>
              </tr>
              <tr>
                <td><code>""</code></td>
                <td><span class="badge-danger">❌ No</span></td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="right-card reveal-trim-card">
          <div class="card-header-badge red-badge">✨ Reveal: Why .trim() matters</div>
          <div class="trim-visual">
            <div class="spaces-box">" &nbsp; &nbsp; &nbsp; "</div>
            <div class="down-arr">⬇ .trim()</div>
            <div class="empty-box">""</div>
          </div>
          <p class="trim-explain"><code>.trim()</code> removes whitespace from both ends of a string. An empty string evaluates to <code>falsy</code> in JavaScript!</p>
        </div>
      </div>

      <div class="bottom-takeaway-banner">
        <div class="banner-icon">💡</div>
        <div class="banner-text"><strong>Think ➔ Pair ➔ Share:</strong> Discuss your predictions with your neighbour.</div>
      </div>
    `,
    notes: "Demonstrate string `.trim()` in browser DevTools console."
  },

  // Slide 28
  {
    id: 28,
    section: "Debugging",
    title: "Debug Challenge",
    subtitle: "One small mistake is causing the page to refresh. Can you find it?",
    type: "quiz",
    content: `
      <div class="two-column-layout">
        <div class="left-card debug-preview-card">
          <div class="browser-bar">Todo App - http://localhost:5173</div>
          <div class="terminal-box">
            <pre><code>form.<span class="code-func">addEventListener</span>(<span class="code-str">"submit"</span>, () => {
  <span class="code-func">addTask</span>();
});</code></pre>
          </div>
        </div>

        <div class="right-card quiz-options-card">
          <h3>What happens when the user clicks "Add Task"?</h3>
          <div class="quiz-options-list">
            <button class="quiz-opt" onclick="checkQuiz(28, 'A', false)">
              <span class="opt-circle"></span> Task is added successfully
            </button>
            <button class="quiz-opt" onclick="checkQuiz(28, 'B', false)">
              <span class="opt-circle"></span> Console shows an error
            </button>
            <button class="quiz-opt" onclick="checkQuiz(28, 'C', true)">
              <span class="opt-circle"></span> Page refreshes (Correct!)
            </button>
            <button class="quiz-opt" onclick="checkQuiz(28, 'D', false)">
              <span class="opt-circle"></span> Nothing happens
            </button>
          </div>
          <div id="quiz-result-28" class="quiz-feedback-box"></div>
          
          <div class="hint-card">
            💡 <strong>Hint:</strong> Think about the browser's default behavior for forms. (Need <code>(e) =&gt; e.preventDefault()</code>).
          </div>
        </div>
      </div>
    `,
    notes: "The form listener missing `e.preventDefault()` causes the browser to reload the page instantly, losing state."
  },

  // Slide 29
  {
    id: 29,
    section: "Checkpoint",
    title: "Checkpoint: Build the Add Task Feature",
    subtitle: "Can you complete the Todo app using everything you've learned so far?",
    type: "checkpoint",
    content: `
      <div class="three-column-dashboard">
        <div class="dash-card ui-preview">
          <div class="dash-head">🖥️ 1. UI Preview</div>
          <div class="todo-app-mock">
            <h4>Todo App</h4>
            <div class="input-row">
              <input type="text" value="Buy groceries" readonly />
              <button class="btn-red-sm">Add Task</button>
            </div>
            <ul class="mock-list">
              <li><span class="dot">●</span> Learn JavaScript <span class="del">🗑️</span></li>
              <li><span class="dot">●</span> Complete Assignment <span class="del">🗑️</span></li>
            </ul>
          </div>
        </div>

        <div class="dash-card mission-list">
          <div class="dash-head">🎯 2. Your Mission</div>
          <ul class="chk-mission">
            <li><span class="sq-chk">✓</span> Read the input</li>
            <li><span class="sq-chk">✓</span> Remove extra spaces</li>
            <li><span class="sq-chk">✓</span> Ignore empty input</li>
            <li><span class="sq-chk">✓</span> Create a new <code>&lt;li&gt;</code></li>
            <li><span class="sq-chk">✓</span> Add it to the list</li>
            <li><span class="sq-chk">✓</span> Clear the input</li>
          </ul>
        </div>

        <div class="dash-card starter-code">
          <div class="dash-head">&lt;/&gt; 3. Starter Code</div>
          <div class="terminal-box">
            <pre><code>form.<span class="code-func">addEventListener</span>(<span class="code-str">"submit"</span>, (e) => {
  e.<span class="code-func">preventDefault</span>();
  
  <span class="code-comment">// Complete this code</span>
  
});</code></pre>
          </div>
        </div>
      </div>

      <div class="bottom-takeaway-banner success-criteria">
        <div class="banner-icon">🏆</div>
        <div class="banner-text"><strong>Success Criteria:</strong> When you type a valid task and click "Add Task", a new item should appear instantly without refreshing the page.</div>
      </div>
    `,
    notes: "Give students 10 minutes to build this core feature in their starter code repository."
  },

  // Slide 30
  {
    id: 30,
    section: "Event Delegation",
    title: "Event Delegation",
    subtitle: "One listener on the parent can handle events from all current and future child elements.",
    type: "comparison",
    content: `
      <div class="two-column-layout">
        <div class="comparison-card wrong-card">
          <div class="card-status-header">
            <span class="status-icon red-x">❌</span>
            <h4>Without Event Delegation</h4>
          </div>
          <div class="delegation-diagram bad">
            <div class="list-container">
              <div class="list-item">🗑️ Buy Milk <span class="listener-tag">Listener Attached</span></div>
              <div class="list-item">🗑️ Learn JS <span class="listener-tag">Listener Attached</span></div>
              <div class="list-item">🗑️ Build Project <span class="listener-tag">Listener Attached</span></div>
              <div class="list-item new-item">🗑️ New Task <span class="no-listener-tag">❌ No Listener Attached!</span></div>
            </div>
          </div>
          <div class="card-alert red-alert">⚠️ New elements won't work unless you add another listener!</div>
        </div>

        <div class="comparison-card correct-card">
          <div class="card-status-header">
            <span class="status-icon green-check">✓</span>
            <h4>With Event Delegation</h4>
          </div>
          <div class="delegation-diagram good">
            <div class="parent-listener-box">
              <span class="parent-tag">Single Event Listener on &lt;ul id="taskList"&gt;</span>
              <div class="list-container">
                <div class="list-item">🗑️ Buy Milk</div>
                <div class="list-item">🗑️ Learn JS</div>
                <div class="list-item">🗑️ Build Project</div>
                <div class="list-item new-item">🗑️ New Task</div>
              </div>
            </div>
          </div>
          <div class="card-alert green-alert">⭐ One listener handles every task—even tasks added later!</div>
        </div>
      </div>

      <div class="bottom-takeaway-banner">
        <div class="banner-icon">💡</div>
        <div class="banner-text">
          <strong>Example:</strong> <code>taskList.addEventListener("click", (e) =&gt; { ... });</code>
        </div>
      </div>
    `,
    notes: "This solves a huge problem in web development: how to attach listeners to dynamically created elements."
  },

  // Slide 31
  {
    id: 31,
    section: "Event Delegation",
    title: "Event Delegation (Revealed!)",
    subtitle: "How Event Bubbling makes delegation work.",
    type: "concept",
    content: `
      <div class="two-column-layout">
        <div class="left-card bubbling-diagram-card">
          <div class="bubbling-flow">
            <div class="event-tag red">click</div>
            <div class="down-arr">⬇</div>
            <div class="parent-box">&lt;ul&gt; <span class="note">Parent listens only once</span></div>
            <div class="up-arr-bubbling">⬆ Event Bubbling</div>
            <div class="children-stack">
              <div class="child-li">&lt;li&gt; Buy Milk <span class="trash">🗑️</span></div>
              <div class="child-li">&lt;li&gt; Learn JS <span class="trash">🗑️</span></div>
              <div class="child-li new">&lt;li&gt; New Task <span class="badge-new">NEW</span> <span class="trash">🗑️</span></div>
            </div>
          </div>
        </div>

        <div class="right-card delegation-explanation">
          <div class="big-check-icon">✓</div>
          <h2>The parent <code>&lt;ul&gt;</code> listens once and handles clicks from every <code>&lt;li&gt;</code>, including items added later.</h2>
        </div>
      </div>

      <div class="terminal-box snippet-footer">
        <div class="terminal-header"><span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span> Example Code</div>
        <pre><code>document.<span class="code-func">getElementById</span>(<span class="code-str">'taskList'</span>).<span class="code-func">addEventListener</span>(<span class="code-str">'click'</span>, (e) => {
  <span class="code-comment">// handle clicks from any &lt;li&gt; here</span>
});</code></pre>
      </div>
    `,
    notes: "Explain Event Bubbling: events trigger on target element and bubble up through all parent ancestors in the DOM tree."
  },

  // Slide 32
  {
    id: 32,
    section: "User Experience",
    title: "Keyboard Events",
    subtitle: "Enabling smooth keyboard shortcuts like pressing Enter.",
    type: "concept",
    content: `
      <div class="two-column-layout">
        <div class="left-hero-text">
          <h2>Not every action starts with a click. The <span class="highlight-brand">keydown</span> event fires on every key the user presses.</h2>
        </div>
        <div class="right-card dark-card">
          <div class="card-header-badge">FROM KEYPRESS TO ACTION</div>
          <div class="vertical-timeline">
            <div class="timeline-step">
              <div class="step-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg></div>
              <div class="step-details">
                <h4>keydown fires</h4>
                <p>The browser reports exactly which key went down</p>
              </div>
            </div>
            <div class="timeline-line"></div>
            <div class="timeline-step">
              <div class="step-icon active-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg></div>
              <div class="step-details">
                <h4>Check e.key</h4>
                <p>Compare it to 'Enter' before doing anything</p>
              </div>
            </div>
            <div class="timeline-line"></div>
            <div class="timeline-step">
              <div class="step-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg></div>
              <div class="step-details">
                <h4>Reuse the handler</h4>
                <p>Call the same function the submit button already uses</p>
              </div>
            </div>
          </div>
          <div class="card-footer-note">
            <code>input.addEventListener('keydown', (e) =&gt; { if (e.key === 'Enter') addTask(); });</code>
          </div>
        </div>
      </div>
    `,
    notes: "Adding Enter key support makes applications feel modern and accessible."
  },

  // Slide 33
  {
    id: 33,
    section: "UI Polish",
    title: "UI Polish with classList.toggle()",
    subtitle: "One method. Different user experiences.",
    type: "demo",
    content: `
      <div class="syntax-banner">
        <code>element.classList.toggle("className");</code>
        <p>✓ Adds the class if it's missing. Removes it if it's already there.</p>
      </div>

      <div class="two-column-layout margin-top">
        <div class="light-card usecase-card">
          <div class="uc-header red-header">🚫 Hide Panel</div>
          <div class="toggle-demo-row">
            <div class="state-box visible">Information Panel (Visible)</div>
            <span class="arr">➔ Click "Hide" ➔</span>
            <div class="state-box hidden-box">[ Hidden ]</div>
          </div>
          <code>panel.classList.toggle("hidden");</code>
        </div>

        <div class="light-card usecase-card">
          <div class="uc-header green-header">🌙 Dark Mode</div>
          <div class="toggle-demo-row">
            <div class="theme-box light">☀️ Light Theme</div>
            <span class="arr">⇄ Toggle ⇄</span>
            <div class="theme-box dark">🌙 Dark Theme</div>
          </div>
          <code>document.body.classList.toggle("dark");</code>
        </div>
      </div>

      <div class="bottom-takeaway-banner split-rule-banner">
        <div class="banner-icon">💡</div>
        <div class="banner-text">
          <span>✓ <code>classList.toggle()</code> switches a CSS class ON and OFF.</span>
          <span>✓ Different classes create different UI effects.</span>
        </div>
      </div>
    `,
    notes: "Show how `classList.toggle('completed')` easily marks a task item done with strikethrough."
  },

  // Slide 34
  {
    id: 34,
    section: "Checkpoint",
    title: "Checkpoint: UI Polish Challenge",
    subtitle: "Use classList.toggle() to make your Todo app feel interactive.",
    type: "checkpoint",
    content: `
      <div class="three-column-dashboard">
        <div class="dash-card ui-preview">
          <div class="dash-head">🖥️ 1. Todo App Preview</div>
          <div class="todo-dark-mock">
            <div class="mock-head">🌙 Dark Mode <span class="toggle-switch active"></span></div>
            <ul class="mock-list">
              <li>⚪ Learn JavaScript</li>
              <li class="done-item">✔ <s>Build Todo App</s></li>
              <li>⚪ Complete Assignment</li>
            </ul>
          </div>
        </div>

        <div class="dash-card mission-list">
          <div class="dash-head">🎯 2. Your Mission</div>
          <ul class="chk-mission">
            <li><span class="sq-chk">✓</span> Click a task to mark it complete</li>
            <li><span class="sq-chk">✓</span> Click again to undo</li>
            <li><span class="sq-chk">✓</span> Toggle Dark Mode</li>
            <li><span class="sq-chk">✓</span> Use <code>classList.toggle()</code></li>
          </ul>
        </div>

        <div class="dash-card starter-code">
          <div class="dash-head">&lt;/&gt; 3. Starter Code</div>
          <div class="terminal-box">
            <pre><code><span class="code-comment">// Toggle complete on task click</span>
task.classList.__________(<span class="code-str">"completed"</span>);

<span class="code-comment">// Toggle dark mode</span>
document.body.classList.__________(<span class="code-str">"dark"</span>);</code></pre>
          </div>
        </div>
      </div>

      <div class="bottom-takeaway-banner">
        <div class="banner-icon">💡</div>
        <div class="banner-text"><strong>Challenge Goal:</strong> The same JavaScript method (<code>classList.toggle</code>) solves both features!</div>
      </div>
    `,
    notes: "Give students 5 minutes to complete this interactive challenge."
  },

  // Slide 35
  {
    id: 35,
    section: "Architecture",
    title: "Putting Everything Together",
    subtitle: "Connecting every concept into one complete application architecture.",
    type: "flow",
    content: `
      <div class="flow-steps-grid">
        <div class="flow-step-card">
          <div class="step-header">01</div>
          <div class="step-circle-icon">📖</div>
          <h3>User Action</h3>
          <p>A click, a keystroke, or a submit — the trigger for everything that follows.</p>
        </div>
        <div class="flow-arrow">➔</div>

        <div class="flow-step-card">
          <div class="step-header">02</div>
          <div class="step-circle-icon">📑</div>
          <h3>Event Fires</h3>
          <p>The browser hands your callback an event object describing what happened.</p>
        </div>
        <div class="flow-arrow">➔</div>

        <div class="flow-step-card">
          <div class="step-header">03</div>
          <div class="step-circle-icon">💬</div>
          <h3>Validate & Update</h3>
          <p>Bad input is rejected; good input creates or changes DOM elements.</p>
        </div>
        <div class="flow-arrow">➔</div>

        <div class="flow-step-card">
          <div class="step-header">04</div>
          <div class="step-circle-icon">🔖</div>
          <h3>Updated UI</h3>
          <p>The page reflects the change instantly — no reload, no waiting.</p>
        </div>
      </div>

      <div class="big-idea-dark-bar">
        <span class="icon-circle">🎯</span>
        <span><strong>Notice:</strong> every concept from this workshop connects to form one complete application architecture.</span>
      </div>
    `,
    notes: "Summarize the end-to-end architecture before touching on script loading timing."
  },

  // Slide 36
  {
    id: 36,
    section: "Best Practices",
    title: "JavaScript Timing",
    subtitle: "JavaScript can run before the browser finishes building the page.",
    type: "flow",
    content: `
      <div class="three-step-pipeline">
        <div class="pipeline-card step-1">
          <div class="step-num red">1</div>
          <h3>HTML Loading</h3>
          <p>Browser starts reading HTML document.</p>
        </div>
        <div class="pipeline-arrow">➔</div>
        <div class="pipeline-card step-2">
          <div class="step-num orange">2</div>
          <h3>Script Runs Too Early</h3>
          <p><code>document.querySelector("#btn")</code></p>
          <div class="status-note danger-text">❌ Result ➔ null</div>
          <p class="sub-err">Element doesn't exist yet in DOM!</p>
        </div>
        <div class="pipeline-arrow">➔</div>
        <div class="pipeline-card step-3">
          <div class="step-num green">3</div>
          <h3>DOM Ready</h3>
          <p>HTML fully parsed.</p>
          <div class="status-note success-text">✓ Result ➔ &lt;button&gt;Click Me&lt;/button&gt;</div>
        </div>
      </div>

      <div class="bottom-takeaway-banner split-rule-banner">
        <div class="banner-icon">💡</div>
        <div class="banner-text">
          <span><strong>Best Practice:</strong> Use <code>&lt;script src="app.js" defer&gt;&lt;/script&gt;</code></span>
          <span class="divider">OR</span>
          <span>Place <code>&lt;script&gt;</code> just before <code>&lt;/body&gt;</code>.</span>
        </div>
      </div>
    `,
    notes: "Explain `defer` attribute: downloads script asynchronously in parallel, but executes only after HTML parsing completes."
  },

  // Slide 37
  {
    id: 37,
    section: "Hands-on",
    title: "Live Coding Challenge",
    subtitle: "Let's build a working feature together, step by step.",
    type: "checkpoint",
    content: `
      <div class="two-column-layout">
        <div class="left-card live-code-ui">
          <div class="browser-bar">Todo App</div>
          <div class="input-group-row">
            <input type="text" placeholder="What needs to be done?" readonly />
            <button class="btn-red-sm">Add Task</button>
          </div>
          <ul class="todo-items-list">
            <li>⚪ Learn JavaScript <span class="del">🗑️</span></li>
            <li>⚪ Build Todo App <span class="del">🗑️</span></li>
            <li>⚪ Complete Assignment <span class="del">🗑️</span></li>
          </ul>
        </div>

        <div class="right-card challenge-list-card">
          <div class="card-header-badge red-badge">🎯 Your Challenge</div>
          <ul class="challenge-checklist">
            <li><span class="icon">⌨️</span> Read the input value</li>
            <li><span class="icon">✨</span> Ignore empty / whitespace input</li>
            <li><span class="icon">➕</span> Create a new <code>&lt;li&gt;</code></li>
            <li><span class="icon">📑</span> Add it to the list & clear input</li>
          </ul>
        </div>
      </div>

      <div class="bottom-takeaway-banner info-trio">
        <span>🚀 <strong>Goal:</strong> Add new task instantly without refreshing page.</span>
        <span>⏱️ <strong>Time:</strong> 15 Minutes</span>
        <span>👥 <strong>Mode:</strong> Work in pairs</span>
      </div>
    `,
    notes: "Set timer for 15 minutes. Walk around classroom supporting students."
  },

  // Slide 38
  {
    id: 38,
    section: "Enhancements",
    title: "Bonus Features",
    subtitle: "Small touches that make your Todo app feel polished.",
    type: "grid",
    content: `
      <div class="feature-grid-6">
        <div class="light-card bonus-card">
          <div class="b-icon red">✓</div>
          <h4>Mark Complete</h4>
          <p>Click a task to toggle complete / incomplete.</p>
        </div>
        <div class="light-card bonus-card">
          <div class="b-icon yellow">✏️</div>
          <h4>Edit Task</h4>
          <p>Update task text with one click.</p>
        </div>
        <div class="light-card bonus-card">
          <div class="b-icon red">🗑️</div>
          <h4>Delete Task</h4>
          <p>Remove tasks you no longer need.</p>
        </div>
        <div class="light-card bonus-card">
          <div class="b-icon green">🌙</div>
          <h4>Dark Mode</h4>
          <p>Toggle between light and dark themes.</p>
        </div>
        <div class="light-card bonus-card">
          <div class="b-icon purple">📊</div>
          <h4>Task Counter</h4>
          <p>See total, completed, and pending tasks.</p>
        </div>
        <div class="light-card bonus-card">
          <div class="b-icon blue">💾</div>
          <h4>Local Storage</h4>
          <p>Your tasks stay safe even after refresh.</p>
        </div>
      </div>

      <div class="bottom-takeaway-banner pro-tip-banner">
        <div class="banner-icon">💡</div>
        <div class="banner-text"><strong>Pro Tip:</strong> Great apps aren't just functional—they're <strong>delightful</strong> to use.</div>
      </div>
    `,
    notes: "Encourage fast finishers to implement Local Storage (`localStorage.setItem`)."
  },

  // Slide 39
  {
    id: 39,
    section: "Troubleshooting",
    title: "Common Bugs",
    subtitle: "Small mistakes. Big headaches.",
    type: "grid",
    content: `
      <div class="bugs-grid-5">
        <div class="bug-card">
          <div class="bug-num">1</div>
          <h4>Empty Tasks</h4>
          <div class="prob">❌ Empty or spaces added as tasks.</div>
          <div class="fix">✓ Trim and ignore empty input.</div>
        </div>
        <div class="bug-card">
          <div class="bug-num">2</div>
          <h4>Page Refresh</h4>
          <div class="prob">❌ Form submits and page reloads.</div>
          <div class="fix">✓ <code>e.preventDefault();</code></div>
        </div>
        <div class="bug-card">
          <div class="bug-num">3</div>
          <h4>Wrong Selector</h4>
          <div class="prob">❌ Returns null, element not found.</div>
          <div class="fix">✓ Check <code>#id</code> or <code>.class</code>.</div>
        </div>
        <div class="bug-card">
          <div class="bug-num">4</div>
          <h4>Duplicate IDs</h4>
          <div class="prob">❌ Duplicate IDs break selectors.</div>
          <div class="fix">✓ Use unique IDs.</div>
        </div>
        <div class="bug-card">
          <div class="bug-num">5</div>
          <h4>Event on Wrong Element</h4>
          <div class="prob">❌ Listener attached to wrong target.</div>
          <div class="fix">✓ Attach to correct container.</div>
        </div>
      </div>

      <div class="bottom-takeaway-banner">
        <div class="banner-icon">💡</div>
        <div class="banner-text"><strong>Remember:</strong> Console is your best friend. <code>console.log()</code>, inspect, fix.</div>
      </div>
    `,
    notes: "Reiterate diagnostic workflow: open DevTools Console, check for red error trace, inspect element IDs."
  },

  // Slide 40
  {
    id: 40,
    section: "Summary",
    title: "Key Takeaways",
    subtitle: "What we built and what you take forward.",
    type: "stats",
    content: `
      <div class="stats-trio">
        <div class="stat-card">
          <div class="stat-num red-text">12</div>
          <p>Core concepts mastered, from nodes and selectors to event delegation</p>
        </div>
        <div class="stat-card">
          <div class="stat-num red-text">1</div>
          <p>Complete interactive to-do list, built end to end</p>
        </div>
        <div class="stat-card">
          <div class="stat-num red-text">41</div>
          <p>Slides of hands-on practice, one concept and one checkpoint at a time</p>
        </div>
      </div>

      <div class="milestone-roadmap">
        <div class="rm-step active">
          <h4>DOM & Selection</h4>
          <p>Find and understand the right elements.</p>
        </div>
        <div class="rm-arr">➔</div>
        <div class="rm-step active">
          <h4>Events & Validation</h4>
          <p>Listen, validate, and respond.</p>
        </div>
        <div class="rm-arr">➔</div>
        <div class="rm-step active">
          <h4>Creation & Delegation</h4>
          <p>Create elements and handle events the smart way.</p>
        </div>
      </div>

      <div class="bottom-takeaway-banner keep-building-banner">
        <div class="banner-icon">🚀</div>
        <div class="banner-text"><strong>Keep Building!</strong> You now have the frontend foundation. Next milestone: connect to a real backend.</div>
      </div>
    `,
    notes: "Congratulate students on reaching the workshop milestone!"
  },

  // Slide 41
  {
    id: 41,
    section: "Closing",
    title: "Questions ?",
    subtitle: "Open floor for discussion and troubleshooting.",
    type: "closing",
    content: `
      <div class="closing-canvas wave-bg">
        <h1 class="questions-title">Questions ?</h1>
        <p class="questions-sub">Let's review code snippets, debug issues, or discuss upcoming topics.</p>
      </div>
    `,
    notes: "Open floor for Q&A."
  },

  // Slide 42
  {
    id: 42,
    section: "Closing",
    title: "Thank You!",
    subtitle: "See you in Workshop 3: Async JavaScript & APIs",
    type: "closing",
    content: `
      <div class="closing-canvas thank-you-bg">
        <div class="upgrad-logo-large">
          <span class="logo-red">upGrad</span>
          <span class="logo-sub">School of Technology</span>
        </div>
        <h1 class="thankyou-title">Thank You!</h1>
        <p class="next-session-tag">Next Session: Workshop 3 — Async JavaScript & APIs</p>
      </div>
    `,
    notes: "Wrap up session and remind students about upcoming assignments."
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = SLIDES_DATA;
}

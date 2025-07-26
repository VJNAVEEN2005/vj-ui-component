import React, { useState } from "react";
import {
  IconLoader,
  IconEye,
  IconCopy,
  IconCode,
  IconSettings,
  IconPalette,
  IconFileText,
  IconInfoCircle,
  IconPlayerPlay,
} from "@tabler/icons-react";
import { Loader } from "vj-ui-components";

const LoaderDocs = ({ theme }) => {
  const [activeTab, setActiveTab] = useState("basic");
  const [copySuccess, setCopySuccess] = useState("");

  // Function to determine if a color is light or dark
  const isLightColor = (color) => {
    if (!color) return true;
    const hex = color.replace("#", "");
    const r = parseInt(hex.substr(0, 2), 16);
    const g = parseInt(hex.substr(2, 2), 16);
    const b = parseInt(hex.substr(4, 2), 16);
    const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
    return luminance > 0.5;
  };

  const isLight = isLightColor(theme?.backgroundColor);
  const primaryTextColor = isLight ? "#111827" : "#f1f5f9";
  const secondaryTextColor = isLight ? "#4b5563" : "#cbd5e1";

  const copyToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopySuccess("Copied!");
      setTimeout(() => setCopySuccess(""), 2000);
    } catch (err) {
      setCopySuccess("Failed to copy");
      setTimeout(() => setCopySuccess(""), 2000);
    }
  };

  const tabs = [
    { id: "basic", label: "Basic Usage", icon: <IconInfoCircle size={16} /> },
    { id: "variants", label: "Variants", icon: <IconPalette size={16} /> },
    {
      id: "control",
      label: "Progress Control",
      icon: <IconSettings size={16} />,
    },
    { id: "props", label: "Props", icon: <IconFileText size={16} /> },
    { id: "examples", label: "Live Examples", icon: <IconEye size={16} /> },
  ];

  // Code examples
  const basicUsageCode = `import React, { useState } from 'react';
import { Loader } from 'vj-ui-components';

const LoaderExample = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleAsyncOperation = async () => {
    setIsLoading(true);
    // Simulate async operation
    await new Promise(resolve => setTimeout(resolve, 3000));
    setIsLoading(false);
  };

  return (
    <div>
      <button onClick={handleAsyncOperation}>
        Start Loading
      </button>
      
      {isLoading && (
        <Loader
          variant="circular"
          duration={3000}
          color="#3b82f6"
          size="medium"
        >
          Loading your content...
        </Loader>
      )}
    </div>
  );
};`;

  const variantsCode = `// Circular progress loader
<Loader
  variant="circular"
  duration={4000}
  size="large"
  color="#3b82f6"
  showPercentage={true}
>
  Loading content...
</Loader>

// Linear progress loader
<Loader
  variant="linear"
  duration={3000}
  color="#22c55e"
  size="medium"
>
  Processing data...
</Loader>

// Spinner loader
<Loader
  variant="spinner"
  duration={2000}
  color="#ef4444"
  size="medium"
>
  Syncing files...
</Loader>

// Dots loader
<Loader
  variant="dots"
  duration={2500}
  color="#8b5cf6"
  size="large"
>
  Connecting to server...
</Loader>`;

  const manualControlCode = `const [progress, setProgress] = useState(0);

// Manual progress control
<Loader
  progress={progress}
  variant="circular"
  size="medium"
  color="#f59e0b"
  showPercentage={true}
>
  Manual progress: {progress}%
</Loader>

// Update progress manually
const updateProgress = () => {
  setProgress(prev => Math.min(prev + 10, 100));
};

// Auto-increment progress
useEffect(() => {
  const interval = setInterval(() => {
    setProgress(prev => {
      if (prev >= 100) {
        clearInterval(interval);
        return 100;
      }
      return prev + 5;
    });
  }, 200);
  
  return () => clearInterval(interval);
}, []);`;

  const callbackCode = `<Loader
  variant="circular"
  duration={3000}
  onComplete={() => {
    console.log('Loading completed!');
    // Perform actions after loading
  }}
  onProgress={(progress) => {
    console.log(\`Progress: \${progress}%\`);
  }}
>
  Loading with callbacks...
</Loader>`;

  const propsData = [
    {
      prop: "variant",
      type: "string",
      default: "circular",
      description: 'Type of loader: "circular", "linear", "spinner", "dots"',
    },
    {
      prop: "duration",
      type: "number",
      default: "3000",
      description: "Duration of loading animation in milliseconds",
    },
    {
      prop: "progress",
      type: "number",
      default: "undefined",
      description:
        "Manual progress value (0-100). When set, overrides duration",
    },
    {
      prop: "size",
      type: "string",
      default: "medium",
      description: 'Size of the loader: "small", "medium", "large"',
    },
    {
      prop: "color",
      type: "string",
      default: "#3b82f6",
      description: "Color of the loader",
    },
    {
      prop: "showPercentage",
      type: "boolean",
      default: "true",
      description: "Whether to show percentage text (circular variant only)",
    },
    {
      prop: "autoStart",
      type: "boolean",
      default: "true",
      description: "Whether to start loading automatically",
    },
    {
      prop: "onComplete",
      type: "function",
      default: "undefined",
      description: "Callback when loading reaches 100%",
    },
    {
      prop: "onProgress",
      type: "function",
      default: "undefined",
      description: "Callback with current progress value",
    },
    {
      prop: "children",
      type: "ReactNode",
      default: "undefined",
      description: "Optional loading text or content",
    },
  ];

  const styles = {
    container: {
      padding: "1.5rem",
      maxWidth: "1200px",
      margin: "0 auto",
      color: primaryTextColor,
      backgroundColor: theme?.backgroundColor || "#ffffff",
      minHeight: "100vh",
    },
    header: {
      borderBottom: `1px solid ${isLight ? "#e5e7eb" : "#374151"}`,
      paddingBottom: "1rem",
      marginBottom: "2rem",
    },
    title: {
      fontSize: "2rem",
      fontWeight: "bold",
      color: primaryTextColor,
      marginBottom: "0.5rem",
      display: "flex",
      alignItems: "center",
      gap: "0.75rem",
    },
    subtitle: {
      fontSize: "1.125rem",
      color: secondaryTextColor,
      marginBottom: "1rem",
    },
    tabContainer: {
      borderBottom: `1px solid ${isLight ? "#e5e7eb" : "#374151"}`,
      marginBottom: "2rem",
    },
    tabs: {
      display: "flex",
      gap: "0.5rem",
      overflowX: "auto",
    },
    tab: {
      padding: "0.75rem 1rem",
      border: "none",
      backgroundColor: "transparent",
      color: secondaryTextColor,
      cursor: "pointer",
      borderRadius: "0.375rem 0.375rem 0 0",
      display: "flex",
      alignItems: "center",
      gap: "0.5rem",
      fontSize: "0.875rem",
      fontWeight: "500",
      transition: "all 0.2s ease",
      borderBottom: "2px solid transparent",
    },
    activeTab: {
      color: theme?.primaryColor || "#3b82f6",
      backgroundColor: isLight ? "#f8fafc" : "#1e293b",
      borderBottomColor: theme?.primaryColor || "#3b82f6",
    },
    section: {
      marginBottom: "2rem",
    },
    sectionTitle: {
      fontSize: "1.5rem",
      fontWeight: "600",
      color: primaryTextColor,
      marginBottom: "1rem",
    },
    codeBlock: {
      backgroundColor: isLight ? "#1e293b" : "#0f172a",
      color: "#e2e8f0",
      padding: "1rem",
      borderRadius: "0.5rem",
      fontSize: "0.875rem",
      fontFamily:
        'Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
      overflow: "auto",
      position: "relative",
      marginBottom: "1rem",
    },
    copyButton: {
      position: "absolute",
      top: "0.5rem",
      right: "0.5rem",
      padding: "0.25rem 0.5rem",
      backgroundColor: theme?.primaryColor || "#3b82f6",
      color: "white",
      border: "none",
      borderRadius: "0.25rem",
      cursor: "pointer",
      fontSize: "0.75rem",
      display: "flex",
      alignItems: "center",
      gap: "0.25rem",
    },
    table: {
      width: "100%",
      borderCollapse: "collapse",
      marginTop: "1rem",
      border: `1px solid ${isLight ? "#e5e7eb" : "#374151"}`,
    },
    th: {
      padding: "0.75rem",
      textAlign: "left",
      backgroundColor: isLight ? "#f9fafb" : "#1f2937",
      borderBottom: `1px solid ${isLight ? "#e5e7eb" : "#374151"}`,
      fontWeight: "600",
      color: primaryTextColor,
    },
    td: {
      padding: "0.75rem",
      borderBottom: `1px solid ${isLight ? "#e5e7eb" : "#374151"}`,
      color: primaryTextColor,
    },
    code: {
      backgroundColor: isLight ? "#f1f5f9" : "#334155",
      padding: "0.125rem 0.25rem",
      borderRadius: "0.25rem",
      fontSize: "0.875rem",
      fontFamily: "Monaco, Consolas, monospace",
    },
    badge: {
      backgroundColor: theme?.primaryColor || "#3b82f6",
      color: "white",
      padding: "0.125rem 0.5rem",
      borderRadius: "0.25rem",
      fontSize: "0.75rem",
      fontWeight: "500",
    },
    exampleContainer: {
      padding: "1.5rem",
      border: `1px solid ${isLight ? "#e5e7eb" : "#374151"}`,
      borderRadius: "0.5rem",
      backgroundColor: isLight ? "#f9fafb" : "#1f2937",
      marginBottom: "2rem",
    },
    loaderExample: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "1rem",
      padding: "2rem",
    },
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case "basic":
        return (
          <div>
            <div style={styles.section}>
              <h3 style={styles.sectionTitle}>Installation</h3>
              <div style={styles.codeBlock}>
                <button
                  style={styles.copyButton}
                  onClick={() =>
                    copyToClipboard("npm install vj-ui-components")
                  }
                >
                  <IconCopy size={12} />
                  {copySuccess || "Copy"}
                </button>
                <pre>npm install vj-ui-components</pre>
              </div>
            </div>

            <div style={styles.section}>
              <h3 style={styles.sectionTitle}>Basic Usage</h3>
              <p style={{ color: secondaryTextColor, marginBottom: "1rem" }}>
                The Loader component provides progress indicators with multiple
                variants and customization options.
              </p>
              <div style={styles.codeBlock}>
                <button
                  style={styles.copyButton}
                  onClick={() => copyToClipboard(basicUsageCode)}
                >
                  <IconCopy size={12} />
                  {copySuccess || "Copy"}
                </button>
                <pre>{basicUsageCode}</pre>
              </div>
            </div>

            <div style={styles.section}>
              <h3 style={styles.sectionTitle}>With Callbacks</h3>
              <div style={styles.codeBlock}>
                <button
                  style={styles.copyButton}
                  onClick={() => copyToClipboard(callbackCode)}
                >
                  <IconCopy size={12} />
                  {copySuccess || "Copy"}
                </button>
                <pre>{callbackCode}</pre>
              </div>
            </div>
          </div>
        );

      case "variants":
        return (
          <div>
            <div style={styles.section}>
              <h3 style={styles.sectionTitle}>Loader Variants</h3>
              <p style={{ color: secondaryTextColor, marginBottom: "1rem" }}>
                Choose from different loader styles to match your design needs.
              </p>
              <div style={styles.codeBlock}>
                <button
                  style={styles.copyButton}
                  onClick={() => copyToClipboard(variantsCode)}
                >
                  <IconCopy size={12} />
                  {copySuccess || "Copy"}
                </button>
                <pre>{variantsCode}</pre>
              </div>
            </div>
          </div>
        );

      case "control":
        return (
          <div>
            <div style={styles.section}>
              <h3 style={styles.sectionTitle}>Manual Progress Control</h3>
              <p style={{ color: secondaryTextColor, marginBottom: "1rem" }}>
                Control the progress manually for custom loading scenarios.
              </p>
              <div style={styles.codeBlock}>
                <button
                  style={styles.copyButton}
                  onClick={() => copyToClipboard(manualControlCode)}
                >
                  <IconCopy size={12} />
                  {copySuccess || "Copy"}
                </button>
                <pre>{manualControlCode}</pre>
              </div>
            </div>
          </div>
        );

      case "props":
        return (
          <div>
            <div style={styles.section}>
              <h3 style={styles.sectionTitle}>Loader Props</h3>
              <table style={styles.table}>
                <thead>
                  <tr>
                    <th style={styles.th}>Prop</th>
                    <th style={styles.th}>Type</th>
                    <th style={styles.th}>Default</th>
                    <th style={styles.th}>Description</th>
                  </tr>
                </thead>
                <tbody>
                  {propsData.map((prop, index) => (
                    <tr key={index}>
                      <td style={styles.td}>
                        <code style={styles.code}>{prop.prop}</code>
                      </td>
                      <td style={styles.td}>
                        <span style={styles.badge}>{prop.type}</span>
                      </td>
                      <td style={styles.td}>
                        <code style={styles.code}>{prop.default}</code>
                      </td>
                      <td style={styles.td}>{prop.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        );

      case "examples":
        return (
          <div>
            <div className="mb-8">
              <h3
                className="text-2xl font-semibold mb-4"
                style={{ color: primaryTextColor }}
              >
                Interactive Examples
              </h3>

              {/* Circular Loader Example */}
              <div className="mb-8">
                <h4
                  className="text-xl font-semibold mb-4"
                  style={{ color: primaryTextColor }}
                >
                  Circular Loader
                </h4>
                <div style={styles.codeBlock}>
                  <button
                    style={styles.copyButton}
                    onClick={() =>
                      copyToClipboard(`<Loader
  variant="circular"
  duration={4000}
  size="medium"
  color="#3b82f6"
  showPercentage={true}
>
  Loading content...
</Loader>`)
                    }
                  >
                    <IconCopy size={12} />
                    {copySuccess || "Copy"}
                  </button>
                  <pre>{`<Loader
  variant="circular"
  duration={4000}
  size="medium"
  color="#3b82f6"
  showPercentage={true}
>
  Loading content...
</Loader>`}</pre>
                </div>
                <div
                  className={`p-6 border rounded-lg ${
                    isLight
                      ? "border-gray-200 bg-gray-50"
                      : "border-gray-700 bg-gray-800"
                  }`}
                >
                  <div className="flex justify-center">
                    <Loader
                      variant="circular"
                      duration={4000}
                      size="medium"
                      color={theme?.primaryColor || "#3b82f6"}
                      showPercentage={true}
                    >
                      Loading content...
                    </Loader>
                  </div>
                </div>
              </div>

              {/* Linear Loader Example */}
              <div className="mb-8">
                <h4
                  className="text-xl font-semibold mb-4"
                  style={{ color: primaryTextColor }}
                >
                  Linear Loader
                </h4>
                <div style={styles.codeBlock}>
                  <button
                    style={styles.copyButton}
                    onClick={() =>
                      copyToClipboard(`<Loader
  variant="linear"
  duration={3000}
  color="#22c55e"
  size="medium"
>
  Processing data...
</Loader>`)
                    }
                  >
                    <IconCopy size={12} />
                    {copySuccess || "Copy"}
                  </button>
                  <pre>{`<Loader
  variant="linear"
  duration={3000}
  color="#22c55e"
  size="medium"
>
  Processing data...
</Loader>`}</pre>
                </div>
                <div
                  className={`p-6 border rounded-lg ${
                    isLight
                      ? "border-gray-200 bg-gray-50"
                      : "border-gray-700 bg-gray-800"
                  }`}
                >
                  <Loader
                    variant="linear"
                    duration={3000}
                    color="#22c55e"
                    size="medium"
                  >
                    Processing data...
                  </Loader>
                </div>
              </div>

              {/* Spinner Loader Example */}
              <div className="mb-8">
                <h4
                  className="text-xl font-semibold mb-4"
                  style={{ color: primaryTextColor }}
                >
                  Spinner Loader
                </h4>
                <div style={styles.codeBlock}>
                  <button
                    style={styles.copyButton}
                    onClick={() =>
                      copyToClipboard(`<Loader
  variant="spinner"
  duration={2000}
  color="#ef4444"
  size="medium"
>
  Syncing files...
</Loader>`)
                    }
                  >
                    <IconCopy size={12} />
                    {copySuccess || "Copy"}
                  </button>
                  <pre>{`<Loader
  variant="spinner"
  duration={2000}
  color="#ef4444"
  size="medium"
>
  Syncing files...
</Loader>`}</pre>
                </div>
                <div
                  className={`p-6 border rounded-lg ${
                    isLight
                      ? "border-gray-200 bg-gray-50"
                      : "border-gray-700 bg-gray-800"
                  }`}
                >
                  <div className="flex justify-center">
                    <Loader
                      variant="spinner"
                      duration={2000}
                      color="#ef4444"
                      size="medium"
                    >
                      Syncing files...
                    </Loader>
                  </div>
                </div>
              </div>

              {/* Dots Loader Example */}
              <div className="mb-8">
                <h4
                  className="text-xl font-semibold mb-4"
                  style={{ color: primaryTextColor }}
                >
                  Dots Loader
                </h4>
                <div style={styles.codeBlock}>
                  <button
                    style={styles.copyButton}
                    onClick={() =>
                      copyToClipboard(`<Loader
  variant="dots"
  duration={2500}
  color="#8b5cf6"
  size="large"
>
  Connecting to server...
</Loader>`)
                    }
                  >
                    <IconCopy size={12} />
                    {copySuccess || "Copy"}
                  </button>
                  <pre>{`<Loader
  variant="dots"
  duration={2500}
  color="#8b5cf6"
  size="large"
>
  Connecting to server...
</Loader>`}</pre>
                </div>
                <div
                  className={`p-6 border rounded-lg ${
                    isLight
                      ? "border-gray-200 bg-gray-50"
                      : "border-gray-700 bg-gray-800"
                  }`}
                >
                  <div className="flex justify-center">
                    <Loader
                      variant="dots"
                      duration={2500}
                      color="#8b5cf6"
                      size="large"
                    >
                      Connecting to server...
                    </Loader>
                  </div>
                </div>
              </div>

              {/* Different Sizes Example */}
              <div className="mb-8">
                <h4
                  className="text-xl font-semibold mb-4"
                  style={{ color: primaryTextColor }}
                >
                  Different Sizes
                </h4>
                <div style={styles.codeBlock}>
                  <button
                    style={styles.copyButton}
                    onClick={() =>
                      copyToClipboard(`{/* Small Size */}
<Loader variant="circular" size="small" duration={2000} color="#3b82f6" />

{/* Medium Size */}
<Loader variant="circular" size="medium" duration={2000} color="#3b82f6" />

{/* Large Size */}
<Loader variant="circular" size="large" duration={2000} color="#3b82f6" />`)
                    }
                  >
                    <IconCopy size={12} />
                    {copySuccess || "Copy"}
                  </button>
                  <pre>{`{/* Small Size */}
<Loader variant="circular" size="small" duration={2000} color="#3b82f6" />

{/* Medium Size */}
<Loader variant="circular" size="medium" duration={2000} color="#3b82f6" />

{/* Large Size */}
<Loader variant="circular" size="large" duration={2000} color="#3b82f6" />`}</pre>
                </div>
                <div
                  className={`p-6 border rounded-lg ${
                    isLight
                      ? "border-gray-200 bg-gray-50"
                      : "border-gray-700 bg-gray-800"
                  }`}
                >
                  <div className="flex gap-8 items-center justify-center">
                    <div className="flex flex-col items-center gap-2">
                      <Loader
                        variant="circular"
                        size="small"
                        duration={2000}
                        color={theme?.primaryColor || "#3b82f6"}
                      />
                      <span
                        className="text-xs"
                        style={{ color: secondaryTextColor }}
                      >
                        Small
                      </span>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                      <Loader
                        variant="circular"
                        size="medium"
                        duration={2000}
                        color={theme?.primaryColor || "#3b82f6"}
                      />
                      <span
                        className="text-sm"
                        style={{ color: secondaryTextColor }}
                      >
                        Medium
                      </span>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                      <Loader
                        variant="circular"
                        size="large"
                        duration={2000}
                        color={theme?.primaryColor || "#3b82f6"}
                      />
                      <span
                        className="text-base"
                        style={{ color: secondaryTextColor }}
                      >
                        Large
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Manual Progress Control Example */}
              <div className="mb-8">
                <h4
                  className="text-xl font-semibold mb-4"
                  style={{ color: primaryTextColor }}
                >
                  Manual Progress Control
                </h4>
                <div style={styles.codeBlock}>
                  <button
                    style={styles.copyButton}
                    onClick={() =>
                      copyToClipboard(`const [progress, setProgress] = useState(0);

// Manual progress control
<Loader
  progress={progress}
  variant="circular"
  size="medium"
  color="#f59e0b"
  showPercentage={true}
>
  Manual progress: {progress}%
</Loader>

// Button to update progress
<button onClick={() => setProgress(prev => Math.min(prev + 10, 100))}>
  Increase Progress
</button>`)
                    }
                  >
                    <IconCopy size={12} />
                    {copySuccess || "Copy"}
                  </button>
                  <pre>{`const [progress, setProgress] = useState(0);

// Manual progress control
<Loader
  progress={progress}
  variant="circular"
  size="medium"
  color="#f59e0b"
  showPercentage={true}
>
  Manual progress: {progress}%
</Loader>

// Button to update progress
<button onClick={() => setProgress(prev => Math.min(prev + 10, 100))}>
  Increase Progress
</button>`}</pre>
                </div>
                <div
                  className={`p-6 border rounded-lg ${
                    isLight
                      ? "border-gray-200 bg-gray-50"
                      : "border-gray-700 bg-gray-800"
                  }`}
                >
                  <div className="flex flex-col items-center gap-4">
                    <Loader
                      progress={75}
                      variant="circular"
                      size="medium"
                      color="#f59e0b"
                      showPercentage={true}
                    >
                      Manual progress: 75%
                    </Loader>
                    <p
                      className="text-sm"
                      style={{ color: secondaryTextColor }}
                    >
                      (This example shows a fixed 75% progress for
                      demonstration)
                    </p>
                  </div>
                </div>
              </div>

              {/* With Callbacks Example */}
              <div className="mb-8">
                <h4
                  className="text-xl font-semibold mb-4"
                  style={{ color: primaryTextColor }}
                >
                  With Callbacks
                </h4>
                <div style={styles.codeBlock}>
                  <button
                    style={styles.copyButton}
                    onClick={() =>
                      copyToClipboard(`<Loader
  variant="circular"
  duration={3000}
  onComplete={() => {
    console.log('Loading completed!');
    alert('Loading finished!');
  }}
  onProgress={(progress) => {
    console.log(\`Progress: \${progress}%\`);
  }}
>
  Loading with callbacks...
</Loader>`)
                    }
                  >
                    <IconCopy size={12} />
                    {copySuccess || "Copy"}
                  </button>
                  <pre>{`<Loader
  variant="circular"
  duration={3000}
  onComplete={() => {
    console.log('Loading completed!');
    alert('Loading finished!');
  }}
  onProgress={(progress) => {
    console.log(\`Progress: \${progress}%\`);
  }}
>
  Loading with callbacks...
</Loader>`}</pre>
                </div>
                <div
                  className={`p-6 border rounded-lg ${
                    isLight
                      ? "border-gray-200 bg-gray-50"
                      : "border-gray-700 bg-gray-800"
                  }`}
                >
                  <div className="flex justify-center">
                    <Loader
                      variant="circular"
                      duration={3000}
                      onComplete={() => {
                        console.log("Loading completed!");
                      }}
                      onProgress={(progress) => {
                        console.log(`Progress: ${progress}%`);
                      }}
                    >
                      Loading with callbacks...
                    </Loader>
                  </div>
                  <p
                    className="text-sm mt-4 text-center"
                    style={{ color: secondaryTextColor }}
                  >
                    Check the browser console to see callback logs
                  </p>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div
      style={styles.container}
      className="p-6 w-full overflow-y-auto mx-auto"
    >
      <div
        className={`pb-4 mb-8 border-b ${
          isLight ? "border-gray-200" : "border-gray-700"
        }`}
      >
        <h1
          className="text-3xl font-bold flex items-center gap-3 mb-2"
          style={{ color: primaryTextColor }}
        >
          <IconLoader size={32} color={theme?.primaryColor || "#3b82f6"} />
          Loader Component
        </h1>
        <p className="text-lg" style={{ color: secondaryTextColor }}>
          Customizable loading indicators with multiple variants, progress
          tracking, and animation options.
        </p>
      </div>

      <div
        className={`mb-8 border-b ${
          isLight ? "border-gray-200" : "border-gray-700"
        }`}
      >
        <div className="flex gap-2 overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`px-4 py-3 border-none bg-transparent cursor-pointer rounded-t-md flex items-center gap-2 text-sm font-medium transition-all duration-200 border-b-2 border-transparent ${
                activeTab === tab.id
                  ? `${isLight ? "bg-slate-50" : "bg-slate-800"}`
                  : ""
              }`}
              style={{
                color:
                  activeTab === tab.id
                    ? theme?.primaryColor || "#3b82f6"
                    : secondaryTextColor,
                borderBottomColor:
                  activeTab === tab.id
                    ? theme?.primaryColor || "#3b82f6"
                    : "transparent",
              }}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {renderTabContent()}
    </div>
  );
};

export default LoaderDocs;

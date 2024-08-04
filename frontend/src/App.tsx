import Button from "./components/button";

function App() {
  const sizes = ["sm", "md", "lg", "full"];
  const variants = ["solid", "bordered", "light", "flat", "faded", "ghost"];
  const radii = ["sm", "md", "lg", "full"];
  const colors = ["primary", "secondary", "success", "danger", "warning"];

  return (
    <div className="d-flex flex-wrap" style={{ gap: "16px" }}>
      {variants.map((variant) => (
        <div
          key={variant}
          className="d-flex flex-column"
          style={{ gap: "16px" }}
        >
          <h4>{variant.charAt(0).toUpperCase() + variant.slice(1)} Variant</h4>
          {radii.map((radius) => (
            <div
              key={radius}
              className="d-flex align-items-center flex-wrap"
              style={{ gap: "8px" }}
            >
              {sizes.map((size) => (
                <div
                  key={radius}
                  className="d-flex align-items-center flex-wrap"
                  style={{ gap: "8px" }}
                >
                  {colors.map((color) => (
                    <Button
                      key={color}
                      size={size}
                      radius={radius}
                      variant={variant}
                      color={color}
                    >
                      {size} {radius}
                    </Button>
                  ))}
                </div>
              ))}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default App;

if (
  !(function () {
    try {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("webgl2");
      return (
        window.WebGL2RenderingContext && ctx && ctx.getShaderPrecisionFormat
      );
    } catch (e) {
      return false;
    }
  })()
)
  alert("お使いの環境はWEBGL2に非対応です。");

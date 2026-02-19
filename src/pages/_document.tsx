import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>Turbo C++ Online</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script src="https://v8.js-dos.com/v6.22/js-dos.js"></script>
        <style
          dangerouslySetInnerHTML={{
            __html: `
              body, html {
                height: 100vh;
                margin: 0;
                padding: 0;
                background-color: #000;
                font-family: Arial, sans-serif;
                overflow: hidden;
              }
              
              #dos-container {
                width: 100vw;
                height: 100vh;
                display: flex;
                justify-content: center;
                align-items: center;
                background-color: #000;
                position: fixed;
                top: 0;
                left: 0;
                z-index: 1;
              }
              
              #dos {
                width: 100%;
                height: 100%;
              }
              
              #jsdos {
                width: 100% !important;
                height: 100% !important;
                object-fit: contain;
              }
              
              #browser-warning {
                position: fixed;
                top: 10px;
                right: 10px;
                background-color: #FFA07A;
                padding: 10px;
                border-radius: 5px;
                box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
                cursor: pointer;
                color: #000;
                z-index: 1002;
                max-width: 80%;
              }
            `,
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
        <div id="dos-container">
          <div id="dos"></div>
        </div>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.addEventListener('load', function () {
                const dosCanvas = document.createElement("canvas");
                dosCanvas.id = "jsdos";
                dosCanvas.style.width = "100%";
                dosCanvas.style.height = "100%";
                document.getElementById("dos").appendChild(dosCanvas);

                Dos(dosCanvas, {
                  wdosboxUrl: "https://v8.js-dos.com/v6.22/dosbox.js",
                }).ready((fs, main) => {
                  fs.extract("/turbo.jsdos").then(() => {
                    main(["-conf", "/dosbox.conf"]);
                  });
                });

                var userAgent = navigator.userAgent;
                var isChromium = userAgent.indexOf("Chromium") > -1 || userAgent.indexOf("Chrome") > -1;

                if (!isChromium) {
                  var warningMessage = document.createElement("div");
                  warningMessage.id = "browser-warning";
                  warningMessage.innerHTML = "<p>Non Chromium Browsers are not fully supported</p><p>Plus and Equals symbols may not work on Firefox</p>";
                  document.body.appendChild(warningMessage);

                  warningMessage.addEventListener("click", function() {
                    this.style.display = "none";
                  });

                  setTimeout(function() {
                    warningMessage.style.display = "none";
                  }, 45000);
                }
              });
            `,
          }}
        />
      </body>
    </Html>
  );
}

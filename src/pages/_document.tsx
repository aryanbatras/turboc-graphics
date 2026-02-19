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
              
              .mobile-buttons-left {
                position: fixed;
                bottom: 20px;
                left: 10px;
                display: flex;
                flex-direction: column;
                gap: 10px;
                z-index: 1001;
              }
              
              .mobile-buttons-left button {
                padding: 50px 60px !important;
                font-size: 32px !important;
                background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%) !important;
                color: white !important;
                border: 4px solid rgba(255, 255, 255, 0.9) !important;
                border-radius: 0 !important;
                cursor: pointer !important;
                touch-action: none !important;
                min-width: 180px !important;
                min-height: 140px !important;
                box-shadow: 0 8px 25px rgba(0, 0, 0, 0.7), inset 0 2px 5px rgba(255, 255, 255, 0.3) !important;
                font-weight: 900 !important;
                text-transform: uppercase !important;
                letter-spacing: 1px !important;
                transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
              }
              
              .mobile-buttons-left button:hover {
                background: linear-gradient(135deg, #2a5298 0%, #1e3c72 100%) !important;
                border-color: white !important;
                transform: scale(1.02) !important;
                box-shadow: 0 12px 35px rgba(0, 0, 0, 0.8), inset 0 2px 8px rgba(255, 255, 255, 0.4) !important;
              }
              
              .mobile-buttons-right {
                position: fixed;
                bottom: 20px;
                right: 10px;
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: 10px;
                z-index: 1001;
              }
              
              .mobile-buttons button {
                padding: 50px 60px;
                font-size: 32px;
                background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
                color: white;
                border: 4px solid rgba(255, 255, 255, 0.9);
                border-radius: 0;
                cursor: pointer;
                touch-action: none;
                min-width: 180px;
                min-height: 140px;
                box-shadow: 0 8px 25px rgba(0, 0, 0, 0.7), inset 0 2px 5px rgba(255, 255, 255, 0.3);
                font-weight: 900;
                text-transform: uppercase;
                letter-spacing: 1px;
                transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                position: relative;
                overflow: hidden;
              }
              
              .mobile-buttons button::before {
                content: '';
                position: absolute;
                top: 0;
                left: -100%;
                width: 100%;
                height: 100%;
                background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
                transition: left 0.5s;
              }
              
              .mobile-buttons button:hover {
                background: linear-gradient(135deg, #2a5298 0%, #1e3c72 100%);
                border-color: white;
                transform: scale(1.02);
                box-shadow: 0 12px 35px rgba(0, 0, 0, 0.8), inset 0 2px 8px rgba(255, 255, 255, 0.4);
              }
              
              .mobile-buttons button:active {
                transform: scale(1.01);
                box-shadow: 0 6px 20px rgba(0, 0, 0, 0.6), inset 0 2px 4px rgba(0, 0, 0, 0.2);
              }
              
              .arrow-buttons {
                display: grid;
                grid-template-areas:
                  ". up ."
                  "left . right"
                  ". down .";
                grid-template-columns: 1fr 1fr 1fr;
                grid-template-rows: 1fr 1fr 1fr;
                gap: 8px;
                max-width: 200px;
                margin-bottom: 15px;
                grid-column: 1 / -1;
                justify-self: end;
                margin-right: 20px;
              }
              
              .arrow-buttons button {
                padding: 20px !important;
                min-width: 70px !important;
                min-height: 70px !important;
                font-size: 28px !important;
                border-radius: 0 !important;
                background: linear-gradient(135deg, #2c3e50 0%, #34495e 100%) !important;
                border: 3px solid rgba(255, 255, 255, 0.7) !important;
                box-shadow: 0 6px 12px rgba(0, 0, 0, 0.5) !important;
                font-weight: bold !important;
                text-transform: none !important;
                letter-spacing: normal !important;
              }
              
              .arrow-buttons button:hover {
                background: linear-gradient(135deg, #34495e 0%, #2c3e50 100%) !important;
                transform: scale(1.02) !important;
              }
              
              .mobile-buttons-right > button:not(.arrow-buttons button) {
                padding: 50px 60px !important;
                font-size: 32px !important;
                background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%) !important;
                color: white !important;
                border: 4px solid rgba(255, 255, 255, 0.9) !important;
                border-radius: 0 !important;
                cursor: pointer !important;
                touch-action: none !important;
                min-width: 180px !important;
                min-height: 140px !important;
                box-shadow: 0 8px 25px rgba(0, 0, 0, 0.7), inset 0 2px 5px rgba(255, 255, 255, 0.3) !important;
                font-weight: 900 !important;
                text-transform: uppercase !important;
                letter-spacing: 1px !important;
                transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
                position: relative !important;
                overflow: hidden !important;
              }
              
              .mobile-buttons-right > button:not(.arrow-buttons button):hover {
                background: linear-gradient(135deg, #2a5298 0%, #1e3c72 100%) !important;
                border-color: white !important;
                transform: scale(1.02) !important;
                box-shadow: 0 12px 35px rgba(0, 0, 0, 0.8), inset 0 2px 8px rgba(255, 255, 255, 0.4) !important;
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
                    main(["-conf", "/dosbox.conf"]).then((ci) => {
                      // Add mobile support controllers
                      DosController.Move(ci.getParentDiv(), ci.getKeyEventConsumer());
                      DosController.Qwerty(ci.getParentDiv(), ci.getKeyEventConsumer());
                      DosController.Gamepad(ci, {
                        gamepads: [
                          {
                            keymap: {
                              a: 13,  // Enter
                              b: 27   // Escape
                            },
                            mapArrows: true,
                            stickThreshold: 0.6
                          }
                        ],
                        scanEvery: 200,
                        scanOnTick: true
                      });

                      // Right container for arrows and keys
                      const rightContainer = document.createElement('div');
                      rightContainer.className = 'mobile-buttons-right';
                      document.body.appendChild(rightContainer);

                      // Arrow buttons
                      const arrowDiv = document.createElement('div');
                      arrowDiv.className = 'arrow-buttons';
                      rightContainer.appendChild(arrowDiv);

                      const upBtn = document.createElement('button');
                      upBtn.textContent = '↑';
                      upBtn.title = 'Up Arrow';
                      upBtn.style.gridArea = 'up';
                      let upInterval;
                      upBtn.addEventListener('mousedown', () => {
                        ci.simulateKeyEvent(38, true); // Up down
                        upInterval = setInterval(() => {
                          ci.simulateKeyEvent(38, true); // Up down
                        }, 100);
                      });
                      upBtn.addEventListener('mouseup', () => {
                        ci.simulateKeyEvent(38, false); // Up up
                        clearInterval(upInterval);
                      });
                      upBtn.addEventListener('mouseleave', () => {
                        ci.simulateKeyEvent(38, false); // Up up
                        clearInterval(upInterval);
                      });
                      upBtn.addEventListener('touchstart', (e) => {
                        e.preventDefault();
                        ci.simulateKeyEvent(38, true); // Up down
                        upInterval = setInterval(() => {
                          ci.simulateKeyEvent(38, true); // Up down
                        }, 100);
                      });
                      upBtn.addEventListener('touchend', (e) => {
                        e.preventDefault();
                        ci.simulateKeyEvent(38, false); // Up up
                        clearInterval(upInterval);
                      });
                      arrowDiv.appendChild(upBtn);

                      const leftBtn = document.createElement('button');
                      leftBtn.textContent = '←';
                      leftBtn.title = 'Left Arrow';
                      leftBtn.style.gridArea = 'left';
                      let leftInterval;
                      leftBtn.addEventListener('mousedown', () => {
                        ci.simulateKeyEvent(37, true); // Left down
                        leftInterval = setInterval(() => {
                          ci.simulateKeyEvent(37, true); // Left down
                        }, 100);
                      });
                      leftBtn.addEventListener('mouseup', () => {
                        ci.simulateKeyEvent(37, false); // Left up
                        clearInterval(leftInterval);
                      });
                      leftBtn.addEventListener('mouseleave', () => {
                        ci.simulateKeyEvent(37, false); // Left up
                        clearInterval(leftInterval);
                      });
                      leftBtn.addEventListener('touchstart', (e) => {
                        e.preventDefault();
                        ci.simulateKeyEvent(37, true); // Left down
                        leftInterval = setInterval(() => {
                          ci.simulateKeyEvent(37, true); // Left down
                        }, 100);
                      });
                      leftBtn.addEventListener('touchend', (e) => {
                        e.preventDefault();
                        ci.simulateKeyEvent(37, false); // Left up
                        clearInterval(leftInterval);
                      });
                      arrowDiv.appendChild(leftBtn);

                      const rightBtn = document.createElement('button');
                      rightBtn.textContent = '→';
                      rightBtn.title = 'Right Arrow';
                      rightBtn.style.gridArea = 'right';
                      let rightInterval;
                      rightBtn.addEventListener('mousedown', () => {
                        ci.simulateKeyEvent(39, true); // Right down
                        rightInterval = setInterval(() => {
                          ci.simulateKeyEvent(39, true); // Right down
                        }, 100);
                      });
                      rightBtn.addEventListener('mouseup', () => {
                        ci.simulateKeyEvent(39, false); // Right up
                        clearInterval(rightInterval);
                      });
                      rightBtn.addEventListener('mouseleave', () => {
                        ci.simulateKeyEvent(39, false); // Right up
                        clearInterval(rightInterval);
                      });
                      rightBtn.addEventListener('touchstart', (e) => {
                        e.preventDefault();
                        ci.simulateKeyEvent(39, true); // Right down
                        rightInterval = setInterval(() => {
                          ci.simulateKeyEvent(39, true); // Right down
                        }, 100);
                      });
                      rightBtn.addEventListener('touchend', (e) => {
                        e.preventDefault();
                        ci.simulateKeyEvent(39, false); // Right up
                        clearInterval(rightInterval);
                      });
                      arrowDiv.appendChild(rightBtn);

                      const downBtn = document.createElement('button');
                      downBtn.textContent = '↓';
                      downBtn.title = 'Down Arrow';
                      downBtn.style.gridArea = 'down';
                      let downInterval;
                      downBtn.addEventListener('mousedown', () => {
                        ci.simulateKeyEvent(40, true); // Down down
                        downInterval = setInterval(() => {
                          ci.simulateKeyEvent(40, true); // Down down
                        }, 100);
                      });
                      downBtn.addEventListener('mouseup', () => {
                        ci.simulateKeyEvent(40, false); // Down up
                        clearInterval(downInterval);
                      });
                      downBtn.addEventListener('mouseleave', () => {
                        ci.simulateKeyEvent(40, false); // Down up
                        clearInterval(downInterval);
                      });
                      downBtn.addEventListener('touchstart', (e) => {
                        e.preventDefault();
                        ci.simulateKeyEvent(40, true); // Down down
                        downInterval = setInterval(() => {
                          ci.simulateKeyEvent(40, true); // Down down
                        }, 100);
                      });
                      downBtn.addEventListener('touchend', (e) => {
                        e.preventDefault();
                        ci.simulateKeyEvent(40, false); // Down up
                        clearInterval(downInterval);
                      });
                      arrowDiv.appendChild(downBtn);

                      // Compile button (F9)
                      const compileBtn = document.createElement('button');
                      compileBtn.textContent = 'Compile';
                      compileBtn.addEventListener('click', () => {
                        console.log('Compile button clicked - simulating F9');
                        try {
                          ci.simulateKeyPress(120); // F9
                          console.log('F9 key press simulated successfully');
                        } catch (error) {
                          console.error('Error simulating F9:', error);
                        }
                      });
                      rightContainer.appendChild(compileBtn);

                      // Run button (Smart: First time full sequence, then just Enter x2)
                      let isFirstRun = true;
                      const runBtn = document.createElement('button');
                      runBtn.textContent = 'Run';
                      runBtn.addEventListener('click', () => {
                        if (isFirstRun) {
                          console.log('Run button clicked - first time: Menu -> Right -> Right -> Enter -> Enter');
                          try {
                            // Press F10 to open menu
                            ci.simulateKeyPress(121); // F10
                            setTimeout(() => {
                              // Press Right arrow to go to Compile menu
                              ci.simulateKeyPress(39); // Right arrow
                              setTimeout(() => {
                                // Press Right arrow to go to Run menu
                                ci.simulateKeyPress(39); // Right arrow
                                setTimeout(() => {
                                  // Press Enter to open Run submenu
                                  ci.simulateKeyPress(13); // Enter
                                  setTimeout(() => {
                                    // Press Enter to execute Run
                                    ci.simulateKeyPress(13); // Enter
                                    console.log('First run sequence completed');
                                    isFirstRun = false;
                                  }, 300);
                                }, 300);
                              }, 300);
                            }, 300);
                          } catch (error) {
                            console.error('Error simulating first Run sequence:', error);
                          }
                        } else {
                          console.log('Run button clicked - subsequent: F10 -> Enter -> Enter');
                          try {
                            // Press F10 to open menu
                            ci.simulateKeyPress(121); // F10
                            setTimeout(() => {
                              // Press Enter to open Run submenu
                              ci.simulateKeyPress(13); // Enter
                              setTimeout(() => {
                                // Press Enter to execute Run
                                ci.simulateKeyPress(13); // Enter
                                console.log('Subsequent run sequence completed');
                              }, 300);
                            }, 300);
                          } catch (error) {
                            console.error('Error simulating subsequent Run sequence:', error);
                          }
                        }
                      });
                      rightContainer.appendChild(runBtn);

                      // Menu button (F10)
                      const menuBtn = document.createElement('button');
                      menuBtn.textContent = 'Menu';
                      menuBtn.addEventListener('click', () => {
                        ci.simulateKeyPress(121); // F10
                      });
                      rightContainer.appendChild(menuBtn);

                      // Enter button
                      const enterBtn = document.createElement('button');
                      enterBtn.textContent = 'Enter';
                      enterBtn.addEventListener('click', () => {
                        ci.simulateKeyPress(13); // Enter
                      });
                      rightContainer.appendChild(enterBtn);

                      // Escape button
                      const escapeBtn = document.createElement('button');
                      escapeBtn.textContent = 'Esc';
                      escapeBtn.addEventListener('click', () => {
                        ci.simulateKeyPress(27); // Escape
                      });
                      rightContainer.appendChild(escapeBtn);

                      // Back button (Backspace)
                      const backBtn = document.createElement('button');
                      backBtn.textContent = 'Back';
                      backBtn.addEventListener('click', () => {
                        ci.simulateKeyPress(8); // Backspace
                      });
                      rightContainer.appendChild(backBtn);
                    });
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

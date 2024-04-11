import "./App.css";
import Rectanglebanner from "./assets/images/Rectanglebanner.png";
import Rectangle_1 from "./assets/images/Rectangle_1.png";
import Rectangle from "./assets/images/Rectangle.png";

function App() {
  return (
    <>
      <div className="mb-[200px]">
        <div className="relative mb-20 lg:mb-40 ">
          <div className="relative mb-8">
            <img
              src="https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg"
              alt="..."
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <h5>Title</h5>
                <p>Content</p>
                <button>Button 1</button>
                <button>Button 2</button>
              </div>
            </div>
          </div>
          <div className="lg:absolute w-full -bottom-24">
            <div className="container m-auto left-1/2 bottom-0 transform translate-x-(-50) translate-y-(-50)">
              <div className="w-full lg:grid lg:grid-cols-3 lg:space-x-5">
                <div className="flex min-h-44 bg-white rounded-lg mt-5 shadow-2xl p-8">
                  <div>
                    <img
                      className="w-12 h-12 sm:w-16 sm:h-16"
                      src="https://upload.wikimedia.org/wikipedia/commons/2/24/Circle-icons-image.svg"
                    ></img>
                  </div>
                  <div className="ml-2">
                    <div className="mb-2 font-bold text-lg">Title</div>
                    <div className="text-sm">Content</div>
                  </div>
                </div>
                <div className="flex min-h-44 bg-white rounded-lg mt-5 shadow-2xl p-8">
                  <div>
                    <img
                      className="w-12 h-12 sm:w-16 sm:h-16"
                      src="https://upload.wikimedia.org/wikipedia/commons/2/24/Circle-icons-image.svg"
                    ></img>
                  </div>
                  <div className="ml-2">
                    <div className="mb-2 font-bold text-lg">Title</div>
                    <div className="text-sm">Content</div>
                  </div>
                </div>
                <div className="flex min-h-44 bg-white rounded-lg mt-5 shadow-2xl p-8">
                  <div>
                    <img
                      className="w-12 h-12 sm:w-16 sm:h-16"
                      src="https://upload.wikimedia.org/wikipedia/commons/2/24/Circle-icons-image.svg"
                    ></img>
                  </div>
                  <div className="ml-2">
                    <div className="mb-2 font-bold text-lg">Title</div>
                    <div className="text-sm">Content</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container m-auto mb-16">
          <div className="lg:grid lg:grid-cols-2 gap-16">
            <div className="mb-4">
              <img
                className="rounded-xl w-full lg:w-[715px]"
                src={Rectanglebanner}
                alt="..."
              />
            </div>
            <div className="flex items-center">
              <div className="pr-20">
                <div className="font-bold text-4xl mb-6">Heading</div>
                <div>
                  Convallis turpis erat tempus, viverra aliquet. Nullam viverra
                  nam auctor sit ipsum malesuada duis volutpat.Convallis turpis
                  erat tempus, viverra aliquet. Nullam viverra nam auctor sit
                  ipsum malesuada a, duis volutpat.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container m-auto mb-16 lg:mb-40">
          <div className="lg:grid lg:grid-cols-2 gap-16">
            <div className="flex items-center lg:pr-16">
              <div>
                <div className="font-bold text-4xl mb-6">Heading</div>
                <div>
                  Convallis turpis erat tempus, viverra aliquet. Nullam viverra
                  nam auctor sit ipsum malesuada duis volutpat.Convallis turpis
                  erat tempus, viverra aliquet. Nullam viverra nam auctor sit
                  ipsum malesuada a, duis volutpat.
                </div>
              </div>
            </div>
            <div className="mb-4 relative">
              <img
                className="rounded-xl w-full xl:max-w-[545px]"
                src={Rectangle_1}
                alt="..."
              />
              <div className="xl:absolute xl:-bottom-24 right-0 mt-8">
                <img
                  className="rounded-xl w-full xl:max-w-[480px]"
                  src={Rectangle}
                  alt="..."
                />
              </div>
            </div>
          </div>
        </div>
        <div className="container m-auto mb-16">
          <div className="relative">
            <img
              className="h-96 rounded-xl w-full"
              src="https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg"
              alt="..."
            />
            <div className="absolute flex inset-0 items-center">
              <h1 className="text-5xl font-bold p-20">Banner 02</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

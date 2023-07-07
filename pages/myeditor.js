import sdk from '@stackblitz/sdk';
import Link from 'next/link';
import { useState, useEffect } from 'react';
export default function Myeditor() {
  const REPOS = {
    angular: {
      github: 'kalburgimanjunath/angular-interview-kit-sample1-reactjs',
      openFile: 'src/main.ts',
    },
    reactjs: {
      github: 'kalburgimanjunath/react-interview-kit-sample1-reactjs',
      openFile: 'src/App.js',
    },
  };

  let selectedRepo = REPOS.angular;
  let selectedSolutionsRepo = REPOS.reactjs;
  async function embedProject() {
    sdk.embedGithubProject('embed', selectedRepo.github, {
      height: 490,
      openFile: selectedRepo.openFile,
    });
    sdk.embedGithubProject('solutions', selectedSolutionsRepo.github, {
      height: 490,
      openFile: selectedSolutionsRepo.openFile,
    });
  }

  /**
   * Open the project in a new window on StackBlitz
   */
  function openProject() {
    sdk.openGithubProject(selectedRepo.github, {
      openFile: selectedRepo.openFile,
      // hideNavigation:false
    });
  }

  function setRepo(element) {
    selectedRepo = REPOS[element.value];
    // if already embedded, update the embed
    if (document.getElementById('embed')?.nodeName === 'IFRAME') {
      embedProject();
    }
  }
  useEffect(() => {
    embedProject();
  }, []);

  // window.demo = {
  //   embedProject,
  //   openProject,
  //   setRepo,
  // };
  const [toggleQuestion, showQuestions] = useState(true);
  const [toggleResource, showResources] = useState(false);
  const [showBoilerplateTab, setBoilerplateActiveTab] = useState(true);
  const [showSolutionsTab, setSolutionsActiveTab] = useState(true);
  const resource = [
    {
      id: 1,
      title: '',
      image_url: 'https://picsum.photos/seed/picsum/200/300',
      url: 'https://www.youtube.com/watch?v=nYhGCby2bXA',
    },
    {
      id: 1,
      title: '',
      image_url: 'https://picsum.photos/seed/picsum/200/300',
      url: 'https://www.youtube.com/watch?v=nYhGCby2bXA',
    },
  ];
  return (
    <div className="flex ">
      <div className="w-4/6">
        <div className="border-b border-gray-200 dark:border-gray-700">
          <ul
            className="flex flex-wrap -mb-px text-sm font-medium text-center"
            id="myTab"
            data-tabs-toggle="#myTabContent"
            role="tablist"
          >
            <li className="mr-2 " role="presentation">
              <button
                className="inline-block p-4 border-b-2 rounded-t-lg"
                id="boilerplate-tab"
                data-tabs-target="#boilerplate"
                type="button"
                role="tab"
                aria-controls="boilerplate"
                aria-selected="false"
                onClick={() => {
                  setBoilerplateActiveTab(true);
                  setSolutionsActiveTab(false);
                }}
              >
                Boilerplate
              </button>
            </li>
            <li className="mr-2 active" role="presentation">
              <button
                className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                id="dashboard-tab"
                data-tabs-target="#dashboard"
                type="button"
                role="tab"
                aria-controls="dashboard"
                aria-selected="true"
                onClick={() => {
                  setSolutionsActiveTab(true);
                  setBoilerplateActiveTab(false);
                }}
              >
                Solutions
              </button>
            </li>
          </ul>
        </div>
        <div id="myTabContent">
          <div
            className="rounded-lg bg-gray-50 dark:bg-gray-800"
            id="boilerplate"
            role="tabpanel"
            aria-labelledby="boilerplate-tab"
            style={{ display: showBoilerplateTab ? 'block' : 'none' }}
          >
            <div id="embed"></div>
          </div>
          <div
            className="rounded-lg bg-gray-50 dark:bg-gray-800"
            id="boilerplate"
            role="tabpanel"
            aria-labelledby="boilerplate-tab"
            style={{ display: showSolutionsTab ? 'block' : 'none' }}
          >
            <div id="solutions"></div>
          </div>
        </div>
      </div>
      <div className="w-2/6">
        <header>
          <button
            onClick={() => {
              showQuestions(!toggleQuestion);
              showResources(toggleResource);
            }}
          >
            Question
          </button>
          <button
            onClick={() => {
              showQuestions(toggleQuestion);
              showResources(!toggleResource);
            }}
          >
            Resources
          </button>
          <button>Help</button>
        </header>
        <section>
          <div style={{ display: toggleQuestion ? 'block' : 'none' }}>
            Question
          </div>
          <div
            style={{ display: toggleResource ? 'block' : 'none' }}
            className="bg-gray-200 w-full"
          >
            {resource &&
              resource.map((item) => {
                return (
                  <Link href={item.url}>
                    <div className="m-4 w-full">
                      <img
                        src={item.image_url}
                        size={200}
                        className="w-full"
                        style={{ height: 200 }}
                      />
                    </div>
                    <div>{item.title}</div>
                  </Link>
                );
              })}
          </div>
        </section>
      </div>
    </div>
  );
}

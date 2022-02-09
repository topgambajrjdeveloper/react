export  default function UploadPost(){
  return(
    <div>
        <a href="#" classname="bg-pink-500 flex font-bold hidden hover:bg-pink-600 hover:text-white inline-block items-center lg:block max-h-10 mr-4 px-4 py-2 rounded shado text-white">
          <ion-icon name="add-circle" classname="-mb-1
                             mr-1 opacity-90 text-xl uilus-circle">{'{'}" "{'}'}
            Upload
          </ion-icon></a>
        {'{'}/* upload dropdown box */{'}'}
        <div uk-dropdown="pos: top-right;mode:click ; animation: uk-animation-slide-bottom-small" classname="header_dropdown">
          {'{'}/* notivication header */{'}'}
          <div classname="px-4 py-3 -mx-5 -mt-4 mb-5 border-b">
            <h4>Upload Video</h4>
          </div>
          {'{'}/* notification contents */{'}'}
          <div classname="flex justify-center flex-center text-center dark:text-gray-300">
            <div classname="flex flex-col choose-upload text-center">
              <div classname="bg-gray-100 border-2 border-dashed flex flex-col h-24 items-center justify-center relative w-full rounded-lg dark:bg-gray-800 dark:border-gray-600">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" classname="w-12">
                  <path d="M5.5 13a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 13H11V9.413l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13H5.5z" />
                  <path d="M9 13h2v5a1 1 0 11-2 0v-5z" />
                </svg>
              </div>
              <p classname="my-3 leading-6">
                {'{'}" "{'}'}
                Do you have a video wants to share us <br /> please upload her
                ..
              </p>
              <div uk-form-custom>
                <input type="file" />
                <a href="#" classname="button soft-warning small">
                  {'{'}" "{'}'}
                  Choose file
                </a>
              </div>
              <a href="#" classname="uk-text-muted mt-3 uk-link" uk-toggle="target: .choose-upload ;  animation: uk-animation-slide-right-small, uk-animation-slide-left-medium; queued: true">
                Or Import Video{'{'}" "{'}'}
              </a>
            </div>
            <div classname="uk-flex uk-flex-column choose-upload" hidden>
              <div classname="mx-auto flex flex-col h-24 items-center justify-center relative w-full rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" classname="w-12">
                  <path fillrule="evenodd" d="M2 9.5A3.5 3.5 0 005.5 13H9v2.586l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 15.586V13h2.5a4.5 4.5 0 10-.616-8.958 4.002 4.002 0 10-7.753 1.977A3.5 3.5 0 002 9.5zm9 3.5H9V8a1 1 0 012 0v5z" cliprule="evenodd" />
                </svg>
              </div>
              <p classname="my-3 leading-6">
                {'{'}" "{'}'}
                Import videos from YouTube <br /> Copy / Paste your video link
                here{'{'}" "{'}'}
              </p>
              <form classname="uk-grid-small" uk-grid>
                <div classname="uk-width-expand">
                  <input type="text" classname="uk-input uk-form-small  bg-gray-200 dark:bg-gray-700" style={{}} boxshadow: "none" }} placeholder="Paste link" />
                </div>
                <div classname="uk-width-auto">
                  {'{'}" "{'}'}
                  <button type="submit" classname="button soft-warning -ml-2">
                    Import{'{'}" "{'}'}
                  </button>{'{'}" "{'}'}
                </div>
              </form>
              <a href="#" classname="uk-text-muted mt-3 uk-link" uk-toggle="target: .choose-upload ; animation: uk-animation-slide-left-small, uk-animation-slide-right-medium; queued: true">
                Or Upload Video{'{'}" "{'}'}
              </a>
            </div>
          </div>
          <div classname="px-4 py-3 -mx-5 -mb-4 mt-5 border-t text-sm dark:border-gray-500 dark:text-gray-500">
            Your Video size Must be Maxmium 999MB
          </div>
        </div>
      </div>
  )
}
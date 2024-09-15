// app/license/page.tsx

import React from 'react';

const LicensePage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white dark:bg-gray-900 px-4">
      <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8 max-w-3xl w-full text-gray-800 dark:text-gray-100">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-4">MIT License</h1>
        
        <p className="text-gray-600 dark:text-gray-300 mb-2">
          <span className="font-semibold">&copy; 2024</span> LisaOrg, originally developed by AmySSnippet
        </p>
        
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated 
          documentation files (the &quot;Software&quot;), to deal in the Software without restriction, including without 
          limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the 
          Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
        </p>
        
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          The above copyright notice and this permission notice shall be included in all copies or substantial portions 
          of the Software.
        </p>
        
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          THE SOFTWARE IS PROVIDED &quot;AS IS&quot;, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT 
          LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT 
          SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION 
          OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER 
          DEALINGS IN THE SOFTWARE.
        </p>
      </div>
    </div>
  );
};

export default LicensePage;

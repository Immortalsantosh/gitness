import React from 'react';

const Features = () => {
  return (
    <div className="container mx-auto py-12">
      <h2 className="text-3xl font-bold text-center mb-8">A complete solution for engineering teams of all sizes.</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-gray-800 rounded-lg p-6 text-center">
          <svg className="w-10 h-10 text-orange-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.414a2 2 0 000-2.828z" /></svg>
          <h3 className="text-lg font-bold text-white mb-2">Pull requests</h3>
          <p className="text-gray-400 text-sm">Seamless integration with your favorite Git providers.</p>
        </div>
        <div className="bg-gray-800 rounded-lg p-6 text-center">
          <svg className="w-10 h-10 text-teal-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          <h3 className="text-lg font-bold text-white mb-2">Compare revisions</h3>
          <p className="text-gray-400 text-sm">Effortlessly review code changes and track progress.</p>
        </div>
        <div className="bg-gray-800 rounded-lg p-6 text-center">
          <svg className="w-10 h-10 text-purple-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l3 3l3-3m-3 3H9m3 0h3m-3 3v3m3 0V9" /></svg>
          <h3 className="text-lg font-bold text-white mb-2">Browse code</h3>
          <p className="text-gray-400 text-sm">Easily navigate and explore your codebase.</p>
        </div>
        <div className="bg-gray-800 rounded-lg p-6 text-center">
          <svg className="w-10 h-10 text-pink-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l3 3l3-3m-3 3H9m3 0h3m-3 3v3m3 0V9" /></svg>
          <h3 className="text-lg font-bold text-white mb-2">Webhooks</h3>
          <p className="text-gray-400 text-sm">Automate workflows and stay informed about code changes.</p>
        </div>
        <div className="bg-gray-800 rounded-lg p-6 text-center">
          <svg className="w-10 h-10 text-orange-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
          <h3 className="text-lg font-bold text-white mb-2">Protected branches</h3>
          <p className="text-gray-400 text-sm">Ensure code quality and prevent accidental changes.</p>
        </div>
        <div className="bg-gray-800 rounded-lg p-6 text-center">
          <svg className="w-10 h-10 text-teal-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.405L4 21l5.5-5.5z" /></svg>
          <h3 className="text-lg font-bold text-white mb-2">Notifications and alerts</h3>
          <p className="text-gray-400 text-sm">Stay informed about important events and code updates.</p>
        </div>
        <div className="bg-gray-800 rounded-lg p-6 text-center">
          <svg className="w-10 h-10 text-orange-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l3 3l3-3m-3 3H9m3 0h3m-3 3v3m3 0V9" /></svg>
          <h3 className="text-lg font-bold text-white mb-2">Quality Gates</h3>
          <p className="text-gray-400 text-sm">Ensure code quality and prevent regressions.</p>
        </div>
      </div>
    </div>
  );
};

export default Features;

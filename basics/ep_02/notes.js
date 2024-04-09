/**
 *      npm: doesn't have full form, it is a standard repository for all the packages, biggest pkg manager.
 *          - package.json is a configuration file in react.
 * 
 * 
 *  package.json -> is the configuration file.
 * 
 * 
 * What is Webpack and bundler?
 *      Webpack is a powerful tool that is commonly used as a module bundler for JavaScript applications,
            Webpack processes your application's scripts, styles, and assets (like images and fonts) by transforming and bundling
            them into one or more packages that are optimized and ready to be served in a web browser. It's highly configurable with
            a wide range of plugins and loaders, allowing it to handle different types of files and tasks like transpiling, minifying,
            and even hot module replacement (HMR).
 * 
 * 
 * 
 *  there are two types of pkgs and dependencies 
 *          1. Dev dependencies
 *          2. normal dependencies
 * 
 * 
 *  "parcel": "^2.12.0"
 *      ^[caret] -> if any minar update will come, it will upgrade it automatic, 2.12.0 -> 2.12.1 [minor udpate]
 *      ~[tild] -> if any major update will come, it will upgrade it automatic.  2.12.0 -> 3.1.0 [major update]
 * 
 * 
 *  npm install -D parcel[pkg name]
 *              |_-> stand for devDependencies [ use only for testing ]
 *  # parcel 
 *      - Dev Build
 *      - Local Server 
 *      - HMR = Hot Module Replacement 
 *      - File Watching Algorithm - written in C++
 *      - Caching - Faster Builds
 *      - Image Optimzation 
 *      - Minification of file
 *      - Bundling file
 *      - Compress files
 *      - Consistent Hashing
 *      - Code Splitting 
 *      - Differential Bundling - support older browsers
 *      - Diagnostic 
 *      - Error Handling 
 *      - HTTPs
 *      - Tree Shaking - remove unused code
 *      - Different dev and prod bundles
 * 
 * npx parcel build intex.html: production ready code.
 * 
 *      -> without -D it would be normal dependencies that use in production env. devDependencies only use for 
 *         development like testing they doesn't loade in production.
 * 
 * 
 *  npm init: 
 * 
 * 
 * 
 *  * transitive dependencies: depend one dependencies onto other dependencies.
 * 
 * 
 * 
 * 
 *  node module: is the collection of dependencies.
 * 
 * 
 * 
 *  npx parcel index.html: run parcel index.html at a given server.
 *  |-> executing the packages.
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */

             
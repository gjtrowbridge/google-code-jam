Very few people use JavaScript for [Google Code Jam](https://code.google.com/codejam) (yes, Java/C++ are faster, but my guess is that this probably won't make a difference for most of the coding challenges).

So, I decided to build some boilerplate code so JS users (or, more likely, just me) don't have to worry about the annoying input/output parts of JavaScript, and can run their code as easily as the Java/C++ crew.

To use:

Make sure `node` is installed on your computer
Git Clone this to your computer
Navigate to this directory
`npm install`

Then you can require the helper methods into any of your javascript files to make input/output super easy on the command line.

For example, you could run
`node example_solution.js example_input.txt example_output.txt`

Which will read in the file `example_input.txt` and write to the file `example_output.txt`

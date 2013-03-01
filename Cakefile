fs     = require 'fs'
{exec} = require 'child_process'

appFiles  = [
  # omit src/ and .coffee to make the below lines a little shorter
  'PasswordToggle'
]

# deal with errors from child processes
exerr = (err, sout, serr) ->
  process.stdout.write err if err
  process.stdout.write sout if sout
  process.stdout.write serr if serr
  return

task 'watch', 'watch and compile changes in source dir', ->
  watch = exec "coffee -j app/public/js/jquery.passwordtoggle.js -cw app/src/PasswordToggle.coffee"
  watch.stdout.on 'data', (data)-> process.stdout.write data

task 'build', 'Build single application file from source files', ->
  appContents = new Array remaining = appFiles.length
  for file, index in appFiles then do (file, index) ->
    fs.readFile "app/src/#{file}.coffee", 'utf8', (err, fileContents) ->
      throw err if err
      appContents[index] = fileContents
      process() if --remaining is 0
  process = ->
    fs.writeFile 'app/public/js/jquery.passwordtoggle.coffee', appContents.join('\n\n'), 'utf8', (err) ->
      throw err if err
      exec 'coffee --compile app/public/js/jquery.passwordtoggle.coffee', (err, stdout, stderr) ->
        throw err if err
        console.log stdout + stderr
        fs.unlink 'app/public/js/jquery.passwordtoggle.coffee', (err) ->
          throw err if err
          console.log 'Done.'

task 'min', 'minify compiled *.js file', ->
  exec "uglifyjs -o app/public/js/jquery.passwordtoggle.min.js app/public/js/jquery.passwordtoggle.js"
 
task 'bam', 'build and minify', ->
  invoke 'build'
  invoke 'min'
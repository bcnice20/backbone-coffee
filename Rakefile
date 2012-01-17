namespace :build do
  task :js do
    sh "coffee -o app/js/ -c src/coffee/"
  end

  task :css do
    sh "lessc src/less/app.less > app/css/app.css"
  end
end

task :view do
  sh "google-chrome app/index.html"
end

task :default => ['build:js', 'build:css', :view] do 
  puts "done"
end
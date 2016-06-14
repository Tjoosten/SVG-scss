#!/usr/bin/env ruby
result = `sass sass/style.scss dist/style.css`
raise result unless $?.to_i == 0
raise "When compiled the module should output some CSS" unless File.exists?('dist/style.css')
puts "Regular compile worked successfully"
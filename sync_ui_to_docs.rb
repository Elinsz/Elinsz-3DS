require 'fileutils'

# Caminhos
source_dir = 'ui'
target_dir = 'docs/ui'

# Cria a pasta de destino se não existir
FileUtils.mkdir_p(target_dir)

# Copia todos os arquivos da pasta ui para docs/ui
Dir.glob("#{source_dir}/**/*").each do |file|
  next if File.directory?(file)

  relative_path = file.sub(/^#{source_dir}\//, '')
  destination = File.join(target_dir, relative_path)

  FileUtils.mkdir_p(File.dirname(destination))
  FileUtils.cp(file, destination)
end

puts "Arquivos copiados de '#{source_dir}' para '#{target_dir}' com sucesso!"

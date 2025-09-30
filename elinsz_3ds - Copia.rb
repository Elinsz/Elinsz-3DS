require 'sketchup.rb'
require 'fileutils'

module ELINSZ3DS
  PLUGIN_NAME = "ELINSZ 3DS"
  COMPONENT_DIR = File.join(__dir__, "componentes")

  def self.carregar_interface
    dialog = UI::HtmlDialog.new({
      :dialog_title => PLUGIN_NAME,
      :preferences_key => "elinsz_3ds_ui",
      :scrollable => true,
      :resizable => true,
      :width => 500,
      :height => 400,
      :style => UI::HtmlDialog::STYLE_DIALOG
    })

    html_path = File.join(__dir__, "ui", "interface.html")
    dialog.set_html(File.read(html_path))

    dialog.add_action_callback("inserir_componente") do |context, nome|
      caminho = File.join(COMPONENT_DIR, "#{nome}.skp")
      if File.exist?(caminho)
        defn = Sketchup.active_model.definitions.load(caminho)
        Sketchup.active_model.entities.add_instance(defn, Geom::Transformation.new)
      else
        UI.messagebox("Componente '#{nome}' não encontrado.")
      end
    end

    dialog.show
  end

  unless file_loaded?(__FILE__)
    UI.menu("Plugins").add_item(PLUGIN_NAME) {
      self.carregar_interface
    }
    file_loaded(__FILE__)
  end
end

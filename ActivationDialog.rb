

# require 'sketchup.rb'

## =====================

module EIS_Extensions
  module EIS_Elinsz
    class ActivationDialog < UI::WebDialog
      def initialize
        super("Elinsz - Ativação", false, "Elinsz_Activation", 600, 400, 100, 100, true)

        @activation_file = File.join(Sketchup.find_support_file("Plugins"), "elinsz_activation_status.txt")

        if activated?
          load_login_page
        else
          load_activation_page
        end
      end

      def activated?
        File.exist?(@activation_file) && File.read(@activation_file).strip == "activated"
      end

      def load_activation_page
        html_path = File.join(File.dirname(__FILE__), 'views', 'activation_key.html')
        puts "Carregando ativação em: #{html_path}"

        set_file(html_path)  # Carrega a página HTML que processa o Handlebars
        show
      end

      dialog = UI::HtmlDialog.new(
        {
          :dialog_title => "Dialog Example",
          :preferences_key => "com.sample.plugin",
          :scrollable => true,
          :resizable => true,
          :width => 600,
          :height => 400,
          :left => 100,
          :top => 100,
          :min_width => 50,
          :min_height => 50,
          :max_width =>1000,
          :max_height => 1000,
          :style => UI::HtmlDialog::STYLE_DIALOG
        })
        dialog.set_url("http://www.sketchup.com")
        dialog.show


      # def load_activation_page
      #   handlebars_path = File.join(File.dirname(__FILE__), '../', 'views' , 'activation_key.handlebars')
      #   puts "Carregando ativação em: #{handlebars_path}"
      #   # set_url("file:///#{html_path}")
      #   set_file(handlebars_path)
      #   show
      # end

      def load_login_page
        html_path = File.join(File.dirname(__FILE__), 'src', 'html', 'login.html')
        puts "Carregando login em: #{html_path}"
        # set_url("file:///#{html_path}")
        set_file(html_path)
        show
      end
    end
  end
end

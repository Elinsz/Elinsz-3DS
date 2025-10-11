module EIS_Extensions
  module ELINSZ3DS
    class InterfaceLoader
      def self.html_path
        base_dir = File.dirname(__FILE__).gsub(%r{//}) { "/" }
        File.join(base_dir, "ui", "interface.html")
      end

      # def self.html_path
      #   base_dir = File.dirname(__FILE__).gsub(%r{//}) { "/" }
      #   File.join(base_dir, "Sem uso ext","SKUI","html","elinsz_pt-BR.html")
      # end

      def self.css_path
        File.join(File.dirname(__FILE__), "css", "interface.css")
      end

            def self.css_path
        File.join(File.dirname(__FILE__), "css", "style_md-tst2.css")
      end

      def self.js_path
        File.join(File.dirname(__FILE__), "js", "interface.js")
      end

    end
  end
end

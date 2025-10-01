module EIS_Extensions
  module ELINSZ3DS
    class InterfaceLoader
      def self.html_path
        base_dir = File.dirname(__FILE__).gsub(%r{//}) { "/" }
        File.join(base_dir, "ui", "interface.html")
      end

      def self.css_path
        File.join(File.dirname(__FILE__), "css", "interface.css")
      end

      def self.js_path
        File.join(File.dirname(__FILE__), "js", "interface.js")
      end
    end
  end
end

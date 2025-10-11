module EIS_Extensions
  module ELINSZ3DS
    class IndexCadstLoader
      def self.html_path(file_name = "index-SistCadast.html")
        base_dir = File.dirname(__FILE__).gsub(%r{//}) { "/" }
        File.join(base_dir, file_name)
      end

      def self.html_path(file_name = "index-form.html")
        base_dir = File.dirname(__FILE__).gsub(%r{//}) { "/" }
        File.join(base_dir, file_name)
      end

      def self.html_path(file_name = "index-regist.html")
        base_dir = File.dirname(__FILE__).gsub(%r{//}) { "/" }
        File.join(base_dir, file_name)
      end

      #====================================================================
      def self.css_path(file_name = "style-sistcadast.css")
        File.join(File.dirname(__FILE__), "assets", "stylesheet", file_name)
      end

      def self.css_path(file_name = "style-form.css")
        File.join(File.dirname(__FILE__), "assets", "stylesheet", file_name)
      end

      def self.css_path(file_name = "style-regist.css")
        File.join(File.dirname(__FILE__), "assets", "stylesheet", file_name)
      end

      #====================================================================
      def self.js_path(file_name = "script-sistcadast.js")
        File.join(File.dirname(__FILE__), "assets", "javascript", file_name)
      end

      def self.js_path(file_name = "script-form.js")
        File.join(File.dirname(__FILE__), "assets", "javascript", file_name)
      end

      def self.js_path(file_name = "script-regist.js")
        File.join(File.dirname(__FILE__), "assets", "javascript", file_name)
      end


    end
  end
end

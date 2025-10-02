require 'skui'

module EIS_Extensions
  module ELINSZ3DS
    module PainelComponentes
      def self.show
        window = SKUI::Window.new("Configurações do Componente")
        window.width = 400
        window.height = 300

        # Campo: Largura
        lbl_width = SKUI::Label.new("Largura (mm):")
        txt_width = SKUI::TextBox.new("500")
        txt_width.width = 100

        # Campo: Altura
        lbl_height = SKUI::Label.new("Altura (mm):")
        txt_height = SKUI::TextBox.new("800")
        txt_height.width = 100

        # Campo: Profundidade
        lbl_depth = SKUI::Label.new("Profundidade (mm):")
        txt_depth = SKUI::TextBox.new("500")
        txt_depth.width = 100

        # Dropdown: Tipo de Fundo
        lbl_fundo = SKUI::Label.new("Tipo de Fundo:")
        dd_fundo = SKUI::DropDown.new(["Sem Fundo", "Fundo no canal", "Fundo por trás"])
        dd_fundo.value = "Fundo por trás"

        # Botão: Aplicar
        btn_aplicar = SKUI::Button.new("Aplicar")
        btn_aplicar.on_click {
          largura = txt_width.value.to_i
          altura = txt_height.value.to_i
          profundidade = txt_depth.value.to_i
          tipo_fundo = dd_fundo.value

          UI.messagebox("Aplicando dimensões:\nLargura: #{largura}mm\nAltura: #{altura}mm\nProfundidade: #{profundidade}mm\nFundo: #{tipo_fundo}")
        }

        # Adiciona controles ao painel
        window.add_control(lbl_width)
        window.add_control(txt_width)
        window.add_control(lbl_height)
        window.add_control(txt_height)
        window.add_control(lbl_depth)
        window.add_control(txt_depth)
        window.add_control(lbl_fundo)
        window.add_control(dd_fundo)
        window.add_control(btn_aplicar)

        window.show
      end
    end
  end
end

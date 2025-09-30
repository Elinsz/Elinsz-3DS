# encoding: UTF-8
#
# Elinsz 3DS - parametric design for modular systems
# Copyright 2023 Elinsz 3DS - elinsz - elinsz3d.com.br
#------------------------------------------------------------------------------
#
# Elinsz 3DS uses Sketchup UI (SKUI) https://github.com/thomthom/SKUI
# SKUI is licensed under the MIT License - Copyright (c) 2014 Thomas Thomassen

Sketchup.require 'sketchup'
Sketchup.require 'extensions'

module EIS
	module Elinsz3ds

		VERSION = "1.0.0.1"
		T = LanguageHandler.new( "elinsz.strings" )
		elinszExtension = SketchupExtension.new('Elinsz 3DS', File.join('Elinsz-3DS','elinsz_3ds'))
		elinszExtension.description = "Parametric design for modular systems - www.elinsz3d.com.br"
		elinszExtension.version = VERSION
		elinszExtension.creator = "Elinsz-3DS"
		elinszExtension.copyright = "Elinsz 3DS - www.elinsz3d.com.br - 2022"
		Sketchup.register_extension elinszExtension, true

	end
end

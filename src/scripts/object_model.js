////////////////////////////////////////////////////////////////////////////////
//
// THIS CODE IS NOT APPROVED FOR USE IN/ON ANY OTHER UI ELEMENT OR PRODUCT COMPONENT.
// Copyright (c) 2009 Sergey Anisimov. All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////
// Object model for the TeamCerver response parser and builder.
///////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////
// Contains the values of status codes defined for the build configuration
///////////////////////////////////////////////////////////////////////////////

var ConfigurationStatus = {
    "Unknown": 0,
    "Success": 1,
    "Error": 2,
    "Fixing": 3,
    "Fixed": 4,
    "Ignored": 5,
    "Paused": 6,
    "Pending": 7
};

///////////////////////////////////////////////////////////////////////////////
// Contains the values of status codes defined for the build
///////////////////////////////////////////////////////////////////////////////

var BuildStatus = {
    "Unknown": 0,
    "Success": 1,
    "Error": 2,
    "RunningGreen": 3,
    "RunningRed": 4,
    "Pending": 5,
    "Canceled": 6,
    "Warning": 7
};

///////////////////////////////////////////////////////////////////////////////
// Project serves as a container of data related to the build project
///////////////////////////////////////////////////////////////////////////////

function Project(name) {

    ///////////////////////////////////////////////////////////////////////////////
    // Constructor
    ///////////////////////////////////////////////////////////////////////////////

    this._Reset = function() {
        this._name = name;
        this.Configurations = [];
    };

    ///////////////////////////////////////////////////////////////////////////////
    // Gets the name of the project
    ///////////////////////////////////////////////////////////////////////////////

    this.GetName = function() {
        return this._name;
    };
    this._Reset();
};

///////////////////////////////////////////////////////////////////////////////
// Configuration serves as a container of data related to the build configuration.
///////////////////////////////////////////////////////////////////////////////

function Configuration(name, status, link, project, dataElement) {

    ///////////////////////////////////////////////////////////////////////////////
    // Constructor
    ///////////////////////////////////////////////////////////////////////////////

    this._Reset = function() {
        this._name = name;
        this._status = status;
        this._link = link;
        this._project = project;
        this._dataElement = dataElement;
        this._data = null;
        this.Builds = [];
    };

    ///////////////////////////////////////////////////////////////////////////////
    // Gets the name of the configuration
    ///////////////////////////////////////////////////////////////////////////////

    this.GetName = function() {
        return this._name;
    };
    
    ///////////////////////////////////////////////////////////////////////////////
    // Gets the status of the configuration
    ///////////////////////////////////////////////////////////////////////////////

    this.GetStatus = function() {
        return this._status;
    }; 
    
    ///////////////////////////////////////////////////////////////////////////////
    // Gets the link to the configuration
    ///////////////////////////////////////////////////////////////////////////////

    this.GetLink = function() {
        return this._link;
    }; 
    
    ///////////////////////////////////////////////////////////////////////////////
    // Gets the project
    ///////////////////////////////////////////////////////////////////////////////

    this.GetProject = function() {
        return this._project;
    }; 
    
    ///////////////////////////////////////////////////////////////////////////////
    // Gets unparsed build data element
    ///////////////////////////////////////////////////////////////////////////////

    this.GetDataElement = function() {
        return this._dataElement;
    };
    
    this.GetData = function() {
        return this._data;
    };
    
    this.SetData = function(data) {
        this._data = data;
    };
    
    this._Reset();
};

///////////////////////////////////////////////////////////////////////////////
// Build serves as a container of data related to the specific build.
///////////////////////////////////////////////////////////////////////////////

function Build(status, isPersonal, dataElement) {

    ///////////////////////////////////////////////////////////////////////////////
    // Constructor
    ///////////////////////////////////////////////////////////////////////////////

    this._Reset = function() {
        this._status = status;
        this._isPersonal = isPersonal;
        this._dataElement = dataElement;
        this._data = null;
    };

    ///////////////////////////////////////////////////////////////////////////////
    // Gets the status of the build
    ///////////////////////////////////////////////////////////////////////////////

    this.GetStatus = function() {
        return this._status;
    }; 
    
    ///////////////////////////////////////////////////////////////////////////////
    // Gets the personal status of the build
    ///////////////////////////////////////////////////////////////////////////////

    this.IsPersonal = function() {
        return this._isPersonal;
    }; 
    
    ///////////////////////////////////////////////////////////////////////////////
    // Gets unparsed build data element
    ///////////////////////////////////////////////////////////////////////////////

    this.GetDataElement = function() {
        return this._dataElement;
    }; 
    
    ///////////////////////////////////////////////////////////////////////////////
    // Gets and sets parsed build data
    ///////////////////////////////////////////////////////////////////////////////

    this.GetData = function() {
        return this._data;
    };
    
    this.SetData = function(data) {
        this._data = data;
    };
    
    this._Reset();
};

///////////////////////////////////////////////////////////////////////////////
// ConfigurationData serves as a container of additional data for a configuration.
///////////////////////////////////////////////////////////////////////////////

function ConfigurationData(statusMessage) {

    ///////////////////////////////////////////////////////////////////////////////
    // Constructor
    ///////////////////////////////////////////////////////////////////////////////

    this._Reset = function() {
        this._statusMessage = statusMessage;
    };

    ///////////////////////////////////////////////////////////////////////////////
    // Gets status tooltip
    ///////////////////////////////////////////////////////////////////////////////

    this.GetStatusMessage = function() {
        return this._statusMessage;
    };
    
    this._Reset();
}

///////////////////////////////////////////////////////////////////////////////
// BuildData serves as a container of additional data for a build.
///////////////////////////////////////////////////////////////////////////////

function BuildData(buildNumber, statusToolTip, buildResults, buildResultsLink, buildChanges, buildChangesLink) {

    ///////////////////////////////////////////////////////////////////////////////
    // Constructor
    ///////////////////////////////////////////////////////////////////////////////

    this._Reset = function() {
        this._buildNumber = buildNumber;
        this._statusToolTip = statusToolTip;
        this._buildResults = buildResults;
        this._buildResultsLink = buildResultsLink;
        this._buildChanges = buildChanges;
        this._buildChangesLink = buildChangesLink;
    };

    ///////////////////////////////////////////////////////////////////////////////
    // Gets build number
    ///////////////////////////////////////////////////////////////////////////////

    this.GetBuildNumber = function() {
        return this._buildNumber;
    }; 
    
    ///////////////////////////////////////////////////////////////////////////////
    // Gets status tooltip
    ///////////////////////////////////////////////////////////////////////////////

    this.GetStatusToolTip = function() {
        return this._statusToolTip;
    }; 
    
    ///////////////////////////////////////////////////////////////////////////////
    // Gets status build results message
    ///////////////////////////////////////////////////////////////////////////////

    this.GetBuildResults = function() {
        return this._buildResults;
    }; 
    
    ///////////////////////////////////////////////////////////////////////////////
    // Gets status build results link 
    ///////////////////////////////////////////////////////////////////////////////

    this.GetBuildResultsLink = function() {
        return this._buildResultsLink;
    }; 
    
    ///////////////////////////////////////////////////////////////////////////////
    // Gets status build changes message
    ///////////////////////////////////////////////////////////////////////////////

    this.GetBuildChanges = function() {
        return this._buildChanges;
    }; 
    
    ///////////////////////////////////////////////////////////////////////////////
    // Gets status build results link 
    ///////////////////////////////////////////////////////////////////////////////

    this.GetBuildChangesLink = function() {
        return this._buildChangesLink;
    };
    
    this._Reset();
}

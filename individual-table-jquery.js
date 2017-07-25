<script> 
   function getQueryVariable(variable) {
       var queryString = window.location.search;
       queryString = queryString.slice(1);
       var tokens = queryString.split("-");

       var query = "select B,C,D,E,F,G,H,I,J,K,P,Q,R,S,T,L,M,N,O where B contains '" + tokens[0] + "'" + " And C contains '" + tokens[1] + "'";

      var mySpreadsheet = "https://docs.google.com/spreadsheets/d/1fX8L5__FaU-QAHFcIonlOAxUN60BEobpNLkPEYZePjA/edit#gid=256330215";

    var tableLabels = [
        'First Name',
        'Last Name',
        'Email Address',
        'Country',
        'State (U.S. Only)',
        'Sector',
        'Affiliation',
        'Website',
        'Twitter',
        'Career stage',
        'Subfield',
        'Subfield keywords',
        'Methods keywords',
        'Disease/biology keywords',
        'Research summary/blurb',
        'URM status',
        'Do they identify as a person with a disability?',
        'Other underrepresented status',
        'Comments'
      ]
    //$('#individual').html("");
    $('#individual').sheetrock({
      url: mySpreadsheet,
      query: query,
      reset: true,
      callback: function(error, options, response) {
        //$("#statistics").load(location.href + " #statistics");
      }, 
      labels: tableLabels,
 rowTemplate: function(rowObj) {
        var labels = tableLabels;
        var htmlString;
        if (rowObj.num === 0) {
          htmlString = '';
        } else {
        htmlString = "<tr><th>" + labels[0] + "</th><td>" + rowObj.cellsArray[0] + "</td></tr> \
          <tr><th>" + labels[1] + "</th><td>" + rowObj.cellsArray[1] + "</td></tr> \
          <tr><th>" + labels[2] + "</th><td>" + rowObj.cellsArray[2] + "</td></tr> \
          <tr><th>" + labels[3] + "</th><td>" + rowObj.cellsArray[3] + "</td></tr> \
          <tr><th>" + labels[4] + "</th><td>" + rowObj.cellsArray[4] + "</td></tr> \
          <tr><th>" + labels[5] + "</th><td>" + rowObj.cellsArray[5] + "</td></tr> \
          <tr><th>" + labels[6] + "</th><td>" + rowObj.cellsArray[6] + "</td></tr> \
          <tr><th>" + labels[7] + "</th><td>" + rowObj.cellsArray[7] + "</td></tr> \
          <tr><th>" + labels[8] + "</th><td>" + rowObj.cellsArray[8] + "</td></tr> \
          <tr><th>" + labels[9] + "</th><td>" + rowObj.cellsArray[9] + "</td></tr> \
          <tr><th>" + labels[10] + "</th><td>" + rowObj.cellsArray[10] + "</td></tr> \
          <tr><th>" + labels[11] + "</th><td>" + rowObj.cellsArray[11] + "</td></tr> \
          <tr><th>" + labels[12] + "</th><td>" + rowObj.cellsArray[12] + "</td></tr> \
          <tr><th>" + labels[13] + "</th><td>" + rowObj.cellsArray[13] + "</td></tr> \
          <tr><th>" + labels[14] + "</th><td>" + rowObj.cellsArray[14] + "</td></tr> \
           <tr><th>" + labels[15] + "</th><td>" + rowObj.cellsArray[15] + "</td></tr> \
           <tr><th>" + labels[16] + "</th><td>" + rowObj.cellsArray[16] + "</td></tr> \
           <tr><th>" + labels[17] + "</th><td>" + rowObj.cellsArray[17] + "</td></tr> \
           <tr><th>" + labels[18] + "</th><td>" + rowObj.cellsArray[18] + "</td></tr>"
        }
        return htmlString;
      }
    });
}
   window.onload = getQueryVariable;
</script>

<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>

<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-sheetrock/1.1.4/dist/sheetrock.min.js"></script>

 <script> 
  function checkAnswer() {
      var subfield = document.getElementById('subfield').value;
      var country = document.getElementById('country').value;
      var stage = document.getElementById('stage').value;
      var sector = document.getElementById('academia').value;
      var keyword = document.getElementById('keyword').value;
      //var res = encodeURIComponent(response);
      /* This was the location used by the old code
      //var mySpreadsheet = "https://docs.google.com/spreadsheets/d/1fX8L5__FaU-QAHFcIonlOAxUN60BEobpNLkPEYZePjA/gviz#gid=256330215/tq?tqx=out:html&tq=where%20P%20contains%20'"+response+"'";
      */
    
      var query = "select B,C,D,E,F,G,H,I,J,K,P,Q,R,S,T where P contains '" + subfield + "'";
    
      if (country !== 'null') {
        query = query + " And E contains '" + country + "'";
      }
    
      if (sector !== 'null') {
        query = query + " And G contains '" + sector + "'";
      }

      if (stage !== 'null') {
        stage = encodeURIComponent(stage);
        query = query.concat(" And K contains '" + stage + "'");
      }

      if (keyword !== null) {
        //keyword = encodeURIComponent(keyword);
        query = query + " And (Q contains '" + keyword + "'" + " Or R contains '" + keyword + "'" + " Or S contains '" + keyword + "'" + " Or T contains '" + keyword + "')";
      }

      query = query + " order by C asc";
      console.log(query);
      var mySpreadsheet = "https://docs.google.com/spreadsheets/d/1fX8L5__FaU-QAHFcIonlOAxUN60BEobpNLkPEYZePjA/edit#gid=256330215";
    $('#folks').html("");
    $('#folks').sheetrock({
      url: mySpreadsheet,
      query: query,
      reset: true,
      callback: function(error, options, response) {
        //$("#statistics").load(location.href + " #statistics");
      }, 
      labels: [
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
        'Research summary/blurb'
      ],
      rowTemplate: function(rowObj) {
        var htmlString;
        if (rowObj.num === 0) {
          htmlString = "<tr> \
          <th>" + rowObj.cellsArray[0] + "</th> \
          <th>" + rowObj.cellsArray[1] + "</th> \
          <th>" + rowObj.cellsArray[2] + "</th> \
          <th>" + rowObj.cellsArray[3] + "</th> \
          <th>" + rowObj.cellsArray[4] + "</th> \
          <th>" + rowObj.cellsArray[5] + "</th> \
          <th>" + rowObj.cellsArray[6] + "</th> \
          <th>" + rowObj.cellsArray[7] + "</th> \
          <th>" + rowObj.cellsArray[8] + "</th> \
          <th>" + rowObj.cellsArray[9] + "</th> \
          <th>" + rowObj.cellsArray[10] + "</th> \
          <th>" + rowObj.cellsArray[11] + "</th> \
          <th>" + rowObj.cellsArray[12] + "</th> \
          <th>" + rowObj.cellsArray[13] + "</th> \
          <th>" + rowObj.cellsArray[14] + "</th> \
        </tr>"
        } else {
        htmlString = "<tr> \
          <td>" + rowObj.cellsArray[0] + "</td> \
          <td><a href='../individual/?" + rowObj.cellsArray[0] + "-" + rowObj.cellsArray[1] + "'>" + rowObj.cellsArray[1] + "</a></td> \
          <td>" + rowObj.cellsArray[2] + "</td> \
          <td>" + rowObj.cellsArray[3] + "</td> \
          <td>" + rowObj.cellsArray[4] + "</td> \
          <td>" + rowObj.cellsArray[5] + "</td> \
          <td>" + rowObj.cellsArray[6] + "</td> \
          <td>" + rowObj.cellsArray[7] + "</td> \
          <td>" + rowObj.cellsArray[8] + "</td> \
          <td>" + rowObj.cellsArray[9] + "</td> \
          <td>" + rowObj.cellsArray[10] + "</td> \
          <td>" + rowObj.cellsArray[11] + "</td> \
          <td>" + rowObj.cellsArray[12] + "</td> \
          <td>" + rowObj.cellsArray[13] + "</td> \
          <td>" + rowObj.cellsArray[14] + "</td> \
        </tr>"
        }
        return htmlString;
      }
    });
  }
  </script>

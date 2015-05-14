  function sp(size, arr){ //size - child_array.length
      var out = [],i = 0, n= Math.ceil((arr.length)/size);
      while(i < n) { out.push(arr.splice(0, (i==n-1) && size < arr.length ? arr.length: size));  i++;}
      return out;
  }

  function split(a, n) {//n-number of pieces
      var len = a.length,out = [], i = 0;
      while (i < len) {
          var size = Math.ceil((len - i) / n--);
          out.push(a.slice(i, i + size));
          i += size;
      }
      return out;
  }

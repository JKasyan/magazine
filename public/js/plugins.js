(function($){

    var isAscending = true;

    $.fn.sortTable = function() {
        var $this = $(this);
        console.log('$this = ', $this)
        var columns = $(this).find('thead th');
        console.log('columns = ',columns.length);
        for(var i = 0;i<columns.length;i++) {
            var th = columns[i];
            (function (i) {
                $(th).on('click', function () {
                    console.log('click...', i);
                    _sort(i, $this);
                });
            })(i);
        }
    }

    function _sort(i, $this) {
        var rows = $($this).find('tbody tr').clone();
        rows.sort(function(a, b) {
            var tdFirst = $(a).find('td')[i];
            var valueFirst = $(tdFirst).html().trim();
            var tdSecond = $(b).find('td')[i];
            var valueSecond = $(tdSecond).html().trim();
            if(isAscending) {
                return valueFirst - valueSecond;
            } else {
                return valueSecond - valueFirst;
            }
        });
        isAscending = !isAscending;
        $($this).find('tbody tr').remove();
        $($this).find('tbody').append(rows);
        console.log('Min = ', rows[0]);
        console.log('Max = ', rows[rows.length - 1]);
        //

    }

})(jQuery);



import DataTable, {
	Api,
	ConfigColumns,
	DataType,
	SearchInput,
	SearchInputColumn
} from "../types/types";
import {expectType} from 'tsd';

let table = new DataTable('#myTable', {
	ajax: {
		url: '/api/test',
		dataSrc: {
			data: 'data',
			draw: 'draw',
			recordsFiltered: 'filtered',
			recordsTotal: 'total'
		}
	},
	caption: 'Table caption',
	columnDefs: [
		{
			footer: 'footer text',
			target: 1,
			orderSequence: ['asc', 'desc', '']
		}
	],
	language: {
		entries: {
			_: 'entries',
			1: 'entry'
		}
	},
	layout: {
		topStart: 'info',
		top: 'search',
		top1End: {
			info: {
				text: '_START_ to _END_'
			}
		},
		bottomEnd: [ 'pageLength', 'paging' ],
		bottom1End: [
			{
				paging: {
					numbers: 7
				}
			}
		]
	},
	order: [
		{idx: 1, dir: 'asc'},
		{name: 'test', dir: 'asc'},
		[1, 'desc']
	]
});

expectType<Api<any>>(table);

expectType<string>(table.caption());
expectType<Api<any>>(table.caption('New caption'));
expectType<Api<any>>(table.caption('Other caption', 'bottom'));

expectType<Api<any>>(table.trigger('name', []));
expectType<Api<any>>(table.trigger('name', [], true));

expectType<Api<any>>(table.order(
	{idx: 1, dir: 'asc'},
	{name: 'test', dir: 'asc'},
	[1, 'desc']
));
expectType<Api<any>>(table.order([
	{idx: 1, dir: 'asc'},
	{name: 'test', dir: 'asc'},
	[1, 'desc']
]));


/*
 * Columns
 */
expectType<Api<any>>(table.column(0).draw());

expectType<ConfigColumns>(table.column(0).init());
expectType<Api<ConfigColumns>>(table.columns().init());

expectType<string>(table.column(0).title());
expectType<string>(table.column(0).title(1));
expectType<Api<any>>(table.column(0).title('title'));
expectType<Api<any>>(table.column(0).title('title', 1));
expectType<Api<string>>(table.columns().titles());
expectType<Api<string>>(table.columns().titles(1));
expectType<Api<any>>(table.columns().titles('title'));
expectType<Api<any>>(table.columns().titles('title', 1));

expectType<HTMLElement>(table.column(0).header());
expectType<HTMLElement>(table.column(0).header(1));
expectType<Api<HTMLElement>>(table.columns().header());
expectType<Api<HTMLElement>>(table.columns().header(1));

expectType<boolean>(table.column(0).orderable());
expectType<Api<any>>(table.column(0).orderable(true));
expectType<Api<boolean>>(table.columns().orderable());
expectType<Api<any>>(table.columns().orderable(true));

expectType<Api<any>>(table.column(0).render());
expectType<Api<any>>(table.column(0).render('display'));
expectType<Api<any>>(table.columns().render());
expectType<Api<any>>(table.columns().render('display'));

expectType<Api<any>>(table.column(0).search(''));
expectType<Api<any>>(table.column(0).search('test', {
	boundary: true,
	regex: false,
	smart: true,
	caseInsensitive: true,
	exact: false
}));
expectType<Api<any>>(table.column(0).search(/regex/));
expectType<Api<any>>(table.column(0).search((d) => true));
expectType<Api<any>>(table.columns().search(''));
expectType<Api<any>>(table.columns().search('test', {
	boundary: true,
	regex: false,
	smart: true,
	caseInsensitive: true,
	exact: false
}));
expectType<Api<any>>(table.columns().search(/regex/));
expectType<Api<any>>(table.columns().search((d) => true));

expectType<Api<string>>(table.column(0).search.fixed());
expectType<SearchInputColumn<any> | undefined>(table.column(0).search.fixed('test'));
expectType<Api<any>>(table.column(0).search.fixed('test', null));
expectType<Api<any>>(table.column(0).search.fixed('test', 'search'));
expectType<Api<any>>(table.column(0).search.fixed('test', /regex/));
expectType<Api<any>>(table.column(0).search.fixed('test', (d) => true));
expectType<Api<Array<string>>>(table.columns().search.fixed());
expectType<Api<SearchInputColumn<any> | undefined>>(table.columns().search.fixed('test'));
expectType<Api<any>>(table.columns().search.fixed('test', null));
expectType<Api<any>>(table.columns().search.fixed('test', 'search'));
expectType<Api<any>>(table.columns().search.fixed('test', /regex/));
expectType<Api<any>>(table.columns().search.fixed('test', (d) => true));

expectType<string>(table.column(0).type());
expectType<Api<string>>(table.columns().types());

expectType<number | null>(table.column(0).width());
expectType<Api<number | null>>(table.columns().widths());

expectType<Api<string>>(table.search.fixed());
expectType<SearchInput<any> | undefined>(table.search.fixed('test'));
expectType<Api<any>>(table.search.fixed('test', null));
expectType<Api<any>>(table.search.fixed('test', 'search'));
expectType<Api<any>>(table.search.fixed('test', /regex/));
expectType<Api<any>>(table.search.fixed('test', (d) => true));


/*
 * Rows
 */
expectType<Api<any>>(table.rows({order: 1}).data());

/*
 * Static
 */
DataTable.feature.register('myFeature', function (dt, opts) {
	return document.createElement('div');
});

expectType<string[]>(DataTable.types());
expectType<DataType>(DataTable.type('num'));
expectType<string | undefined>(DataTable.type('num').className);
expectType<((data: any) => string) | undefined>(DataTable.type('num').detect);
DataTable.type('num', 'className', 'test');
DataTable.type('num', 'detect', (d) => 'test');
DataTable.type('num',{
	className: 'test'
});
DataTable.type('num',{
	className: 'test',
	detect: (d) => 'test',
	order: {
		pre: d => d,
		asc: (a, b) => a-b,
		desc: (a, b) => a+b,
	},
	render: d => d,
	search: d => d
});


expectType<number[]>(DataTable.util.unique([1,2,3,4]));

expectType<string>(DataTable.util.stripHtml('some html'));
expectType<void>(DataTable.util.stripHtml((s) => s));

expectType<string>(DataTable.util.escapeHtml('some text'));
expectType<void>(DataTable.util.escapeHtml((s) => s));

expectType<string>(DataTable.util.diacritics('accented text'));
expectType<string>(DataTable.util.diacritics('accented text', true));
expectType<void>(DataTable.util.diacritics((s, r) => s));
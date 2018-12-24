import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        tiles: [],
        error: '',
        loading: false,
    },
    mutations: {
        /**
         * Загрузка данных в state
         *
         * @param state
         * @param tiles
         */
        loadTilesToStore(state, tiles) {
            let doubleTiles = tiles.filter(tile => tile.type === 'double');
            let normalTiles = tiles.filter(tile => tile.type === 'normal');

            // разница числа широких и узких элементов
            let diff = normalTiles.length - doubleTiles.length;
            // максимально колонок
            const maxColumns = 3;
            if (diff <= 0) {
                normalTiles.forEach((tile, i) => {
                    if (i % 2 === 0) {
                        state.tiles.push(doubleTiles.shift());
                        state.tiles.push(tile);
                    } else {
                        state.tiles.push(tile);
                        state.tiles.push(doubleTiles.shift());
                    }
                });
                doubleTiles.forEach(tile => state.tiles.push(tile));
            } else if (diff > 0 && diff < maxColumns) {
                doubleTiles.forEach((tile, i) => {
                    if (i % 2 === 0) {
                        state.tiles.push(tile);
                        state.tiles.push(normalTiles.shift());
                    } else {
                        state.tiles.push(normalTiles.shift());
                        state.tiles.push(tile);
                    }
                });
                normalTiles.forEach(tile => state.tiles.push(tile));
            } else {
                // распределение тайлов
                const rows = [];
                tiles.forEach((tile) => {
                    const { type } = tile;
                    const width = type === 'double' ? 2 : 1;
                    tile.width = width;
                    // элемент успешно размещен
                    let placed = false;
                    // направление сортировки в предыдущей строке
                    let prevSortDirection = 1;
                    // ширина в предыдущей строке
                    let prevWidth = 0;
                    // число блоков в предыдущей строке
                    let prevCount = 0;
                    for (const row of rows) {
                        if (row.width + width <= maxColumns) {
                            placed = true;
                            row.elems.push(tile);
                            row.width += width;
                        }
                        if (
                            row.elems.length === 2
                            && row.width === maxColumns
                            && row.sorted === false
                        ) {
                            let direction;
                            if (
                                (prevCount === 2 && prevWidth === maxColumns)
                            ) {
                                direction = -1 * prevSortDirection;
                            } else if (prevCount === maxColumns) {
                                direction = -1;
                            } else {
                                direction = 1;
                            }
                            row.sortDirection = direction,
                            row.sorted = true;
                            row.elems.sort((a, b) => direction * (b.width - a.width));
                        }
                        prevSortDirection = row.sortDirection;
                        prevWidth = row.width;
                        prevCount = row.elems.length;
                    }
                    // необходима новая строка в распределении
                    if (placed === false) {
                        rows.push({
                            elems: [],
                            width: 0,
                            sorted: false,
                            sortDirection: 1,
                        });
                        rows[rows.length - 1].elems.push(tile);
                        rows[rows.length - 1].width += width;
                    }

                });

                rows.forEach((row) => {
                    row.elems.forEach(tile => state.tiles.push(tile));
                })
            }
        },
        /**
         * Установка сообщения об ошибке
         *
         * @param state
         * @param e
         */
        setError(state, e) {
            state.error = e;
        },
        /**
         * Установка состояния загрузки
         *
         * @param state
         * @param isLoading
         */
        setLoadingState(state, isLoading) {
            state.loading = isLoading === true ? true : false;
        }
    },
    getters: {
        /**
         * Получение статьи (тайла) по id
         *
         * @param state
         * @returns {function(*): T}
         */
        getTileById(state) {
            return (id) => {
                const intId = parseInt(id, 10);
                return state.tiles.find(tile => tile.id === intId)
                    || { id: null, type: null, title: null, description: null, text: null };
            }
        },
    }
});

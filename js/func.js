    var check_winner = false;
    var count = 0;
    var flag = true; // để chọn nhãn (true: X, false: O)

    function winner(cells) {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];

        for (let index = 0; index < lines.length; index++) {
            const [a, b, c] = lines[index];
            if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {
                return cells[a];
            }
        }
        // console.log(lines);
        return null;
    }

    function mark(index) {
        var button = document.getElementsByTagName("button")[index];
        if (check_winner == false) {
            button.innerText = flag ? "X" : "O";
            button.style.fontFamily = "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif";
            button.style.fontSize = "x-large";
            button.style.backgroundColor = flag ? "aqua" : "yellow";
            //button.style.color = flag ? "aqua" : "yellow"; //đổi màu cho chữ trong nút
            button.setAttribute("disabled", "true");
        }

        // document.getElementById("turn").innerText = "O";
        // turn.style.color = "aqua";
        if (flag && check_winner == false) {
            temp = "X";
            document.getElementById("turn").innerText = "O";
            document.getElementById("turn").style.fontFamily = "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif";
            turn.style.color = "yellow";
        } else if (flag == false && check_winner == false) {
            temp = "O";
            document.getElementById("turn").innerText = "X";
            document.getElementById("turn").style.fontFamily = "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif";
            turn.style.color = "aqua";
        } else if (check_winner) {
            temp = " ";
            document.getElementById("turn").innerText = " ";
            //turn.style.color = "aqua";
        }

        flag = !flag;
        count++;
        // if (count == 8) {
        //     alert("Game over!");
        //     location.reload();
        // }
        let btn_1, btn_2, btn_3, btn_4, btn_5, btn_6, btn_7, btn_8, btn_9;
        let index_1, index_2, index_3, index_4, index_5, index_6, index_7, index_8, index_9;
        btn_1 = document.getElementById("1");
        index_1 = btn_1.innerText;

        btn_2 = document.getElementById("2");
        index_2 = btn_2.innerText;

        btn_3 = document.getElementById("3");
        index_3 = btn_3.innerText;

        btn_4 = document.getElementById("4");
        index_4 = btn_4.innerText;

        btn_5 = document.getElementById("5");
        index_5 = btn_5.innerText;

        btn_6 = document.getElementById("6");
        index_6 = btn_6.innerText;

        btn_7 = document.getElementById("7");
        index_7 = btn_7.innerText;

        btn_8 = document.getElementById("8");
        index_8 = btn_8.innerText;

        btn_9 = document.getElementById("9");
        index_9 = btn_9.innerText;
        // for (let i = 1; i <= 9; i++) {
        //     let btn_temp = i.toString();
        //     let btn = document.getElementById(i);
        //     index_1 = btn.innerText;
        //     //console.log(i);
        //     break;
        // }
        //let index_1 = document.getElementById("1");
        let cells = [
            index_1, index_2, index_3,
            index_4, index_5, index_6,
            index_7, index_8, index_9
        ];
        console.log(winner(cells));
        console.log(check_winner);
        //console.log(cells);

        if (winner(cells) == "X" && check_winner == false) {
            document.getElementById("ketQua").innerText = "Winner is: " + winner(cells);
            //ketQua.style.color = "aqua";
            //document.getElementById("turn").innerText = " ";
            //alert("Winner is " + winner(cells));
            check_winner = true;
            // location.reload();
        } else if (winner(cells) == "O" && check_winner == false) {
            document.getElementById("ketQua").innerText = "Winner is: " + winner(cells);
            //ketQua.style.color = "yellow";
            //document.getElementById("turn").innerText = " ";
            //alert("Winner is " + winner(cells));
            check_winner = true;
            temp = " ";

            // } else if (check_winner) {
            //     alert("There was a winner!");
            //     location.reload();
        } else if (count == 9 && check_winner == false) {
            //alert("Game over!");
            document.getElementById("ketQua").innerText = "No winner found"
        }
    }

    function reload() {
        location.reload();
    }

    function darkModeEffect() {
        var element = document.body;
        element.classList.toggle("dark-mode");
    }

    function changesIcon(x) {
        darkModeEffect();
        x.classList.toggle("bx-sun");
    }
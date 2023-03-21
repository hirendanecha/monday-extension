import { useEffect } from "react";
import "./SelectNew.css";

export default function SelectNew({ placeholder, options, id }) {
    var Motus = {};
    useEffect(() => {
        (function () {
            var createMultiselect = function (element, data, selectCb, options) {
                var labels = {};

                labels.emptyText =
                    options && options.emptyText ? options.emptyText : placeholder === "My Tasks" ? "My Tasks...." : `Set ${placeholder}....`;
                labels.selectedText =
                    options && options.selectedText ? options.selectedText : "Selected";
                labels.selectedAllText =
                    options && options.selectedAllText
                        ? options.selectedAllText
                        : "Select All";
                // labels.title = options && options.title ? options.title : "Field";

                //define the elements
                var container = document.createElement("div");
                var multiselectLabel = document.createElement("div");
                var dataContainer = document.createElement("div");
                var button = document.createElement("button");
                var searchField = document.createElement("input");
                var clearSelection = document.createElement("span");
                // var carret = document.createElement("b");
                var list = document.createElement("ul");

                //set the ids
                container.setAttribute("id", "multiselect_container_" + id);
                dataContainer.setAttribute(
                    "id",
                    "multiselect_datacontainer_" + id
                );
                multiselectLabel.setAttribute("id", "multiselect_label_" + id);
                button.setAttribute("id", "multiselect_button_" + id);
                list.setAttribute("id", "multiselect_list_" + id);


                var _fnIsChild = function (element, parent) {
                    var node = element.parentNode;
                    while (node) {
                        if (node === parent) {
                            return true;
                        }
                        node = node.parentNode;
                    }
                    return false;
                };

                var _selectionText = function (element) {
                    var text = "";
                    var selection = element.querySelectorAll("input:checked");
                    if (selection.length === 0) {
                        text = labels.emptyText;
                    } else if (selection.length > 3) {
                        text = selection.length + " " + labels.selectedText;
                    } else {
                        var arr = [];
                        for (var i = 0; i < selection.length; i++) {
                            arr.push(selection[i].parentNode.textContent);
                        }
                        text = arr.join(",");
                    }
                    return text;
                };

                var _openList = function (e) {
                    e.stopPropagation();
                    e.preventDefault();
                    list.style.display = "block";
                    e.srcElement.children[0].focus();
                };

                var _selectItem = function (e) {
                    var text = _selectionText(container);
                    container
                        .getElementsByTagName("button")[0]
                        .children[0].setAttribute("placeholder", text);

                    if (selectCb) {
                        var selectionElements = container.querySelectorAll("input:checked");
                        var selection = [];
                        for (var i = 0; i < selectionElements.length; i++) {
                            selection.push(selectionElements[i].value);
                        }
                        selectCb(selection);
                    }
                };

                var _clearSearch = function () {
                    var elements = container.getElementsByTagName("li");
                    for (var i = 0; i < elements.length; i++) {
                        elements[i].style.display = "";
                    }
                };

                var _performSearch = function (e) {
                    if (e.which != 13 && e.which != 38 && e.which != 40) {
                        var active = list.getElementsByClassName("multiselect-label--active");
                        if (active.length > 0) {
                            active[0].classList.remove("multiselect-label--active");
                        }
                        var first = true;
                        var filter = e.srcElement.value.toUpperCase();
                        var elements = container.getElementsByTagName("li");
                        for (var i = 0; i < elements.length; i++) {
                            var cb = elements[i].getElementsByTagName("label")[0].textContent;
                            if (cb.toUpperCase().indexOf(filter) !== -1) {
                                if (first) {
                                    first = false;
                                    elements[i].children[0].children[0].classList.add(
                                        "multiselect-label--active"
                                    );
                                }
                                elements[i].style.display = "";
                            } else {
                                elements[i].style.display = "none";
                            }
                        }
                    }
                };

                var _fnClearSelection = function (e) {
                    e.stopPropagation();
                    e.preventDefault();
                    var inputs = list.getElementsByTagName("input");
                    for (var i = 0; i < inputs.length; i++) {
                        if (inputs[i].checked) {
                            inputs[i].parentNode.click();
                        }
                    }
                    e.stopPropagation();
                };

                var _fnSelectAll = function (e) {
                    var inputs = list.getElementsByTagName("input");
                    for (var i = 0; i < inputs.length; i++) {
                        if (!inputs[i].checked) {
                            inputs[i].parentNode.click();
                        }
                    }
                    e.stopPropagation();
                };

                container.classList.add("multiselect-container");
                multiselectLabel.classList.add("multiselect-label");
                // multiselectLabel.innerHTML = labels.title;
                dataContainer.classList.add("multiselect-data-container");
                button.classList.add("multiselect-button");

                searchField.setAttribute("type", "text");
                searchField.setAttribute("placeholder", labels.emptyText);
                searchField.classList.add("multiselect-text");
                searchField.addEventListener("keyup", _performSearch);

                clearSelection.classList.add("multiselect-clear");
                clearSelection.innerHTML = "X";
                clearSelection.addEventListener("click", _fnClearSelection);

                // carret.classList.add("carret");

                button.appendChild(searchField);
                button.appendChild(clearSelection);
                // button.appendChild(carret);

                button.addEventListener("click", _openList);

                list.classList.add("multiselect-list");

                for (var i = -1; i < data.length; i++) {
                    var item = document.createElement("li");
                    var a = document.createElement("a");
                    var label = document.createElement("label");
                    var input = document.createElement("input");

                    a.setAttribute("tabindex", "0");

                    label.classList.add("multiselect-item-label");

                    if (i == -1) {
                        a.addEventListener("click", _fnSelectAll);
                        label.appendChild(document.createTextNode("Select all"));
                        label.classList.add("multiselect-item-label--select-all");
                    } else {
                        if (i == 0) {
                            label.classList.add("multiselect-item-label--active");
                        }
                        input.setAttribute("type", "checkbox");
                        input.setAttribute("class", "multiselect-checkbox");
                        label.appendChild(input);
                        input.setAttribute("value", data[i].value);
                        input.addEventListener("change", _selectItem);
                        label.appendChild(document.createTextNode(data[i].label));
                    }
                    a.appendChild(label);
                    item.appendChild(a);
                    list.appendChild(item);
                }

                dataContainer.appendChild(button);
                dataContainer.appendChild(list);
                container.appendChild(multiselectLabel);
                container.appendChild(dataContainer);
                element?.appendChild(container);

                //Change to the specific window
                document.addEventListener("click", function (e) {
                    if (!_fnIsChild(e.target, container)) {
                        list.style.display = "none";
                        searchField.value = "";
                        _clearSearch();
                    }
                });

                document.addEventListener("keyup", function (e) {
                    if (list.style.display == "block") {
                        //mouse down
                        if (e.which === 40) {
                            var active = list.getElementsByClassName(
                                "multiselect-label--active"
                            )[0];
                            var next = active.parentNode.parentNode.nextSibling;
                            //Find the next visible element
                            while (next && next.style && next.style.display == "none") {
                                next = next.nextSibling;
                            }
                            if (next) {
                                active.classList.remove("multiselect-label--active");
                                next
                                    .getElementsByClassName("multiselect-label")[0]
                                    .classList.add("multiselect-label--active");
                                next.children[0].focus();
                                searchField.focus();
                                e.preventDefault();
                            }
                        } else if (e.which === 38) {
                            //mouse up
                            var active = list.getElementsByClassName(
                                "multiselect-label--active"
                            )[0];
                            var prev = active.parentNode.parentNode.previousSibling;
                            //Find the previous visible element
                            while (prev && prev.style && prev.style.display === "none") {
                                prev = prev.previousSibling;
                            }
                            if (prev) {
                                active.classList.remove("multiselect-label--active");
                                prev
                                    .getElementsByClassName("multiselect-label")[0]
                                    .classList.add("multiselect-label--active");
                                prev.children[0].focus();
                                searchField.focus();
                                e.preventDefault();
                            }
                        } else if (e.which === 13) {
                            // enter
                            list.getElementsByClassName("multiselect-label--active")[0].click();
                            e.preventDefault();
                        }
                    }
                });
            };
            var exportObj = {
                init: function (element, data, selectCb, options) {
                    createMultiselect(element, data, selectCb, options);
                }
            };

            Motus.ElementMultiselect = exportObj;
        })();

        var data = options;
        var element = document.getElementById("multiselect__container-" + id);

        var select = function (data) {
            console.log(data);
        };

        Motus.ElementMultiselect.init(element, data, select);

        return () => {

        }
    }, [])

    return (
        <div style={{ width: '100%' }}>
            <div id={"multiselect__container-" + id}></div>
        </div>
    );
}

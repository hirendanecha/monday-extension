import React, { useCallback, useEffect, useRef } from "react";
import "./select.css";


const Select = ({ options, placeholder, id }) => {
    const ref = useRef()
    const init = useCallback((element) => {
        let wrapper = document.createElement("div");
        wrapper.addEventListener("click", clickOnWrapper);
        wrapper.classList.add("multi-select-component");

        // Create elements of search
        const search_div = document.createElement("div");
        search_div.classList.add("search-container");
        const input = document.createElement("input");
        input.classList.add("selected-input-" + id);
        input.classList.add("selected-input");
        input.setAttribute("autocomplete", "off");
        input.setAttribute("tabindex", "0");
        input.addEventListener("keyup", inputChange);
        input.addEventListener("keydown", deletePressed);
        input.addEventListener("click", openOptions);

        const dropdown_icon = document.createElement("a");
        dropdown_icon.setAttribute("href", "#");
        dropdown_icon.classList.add("dropdown-icon");

        dropdown_icon.addEventListener("click", clickDropdown);
        const autocomplete_list = document.createElement("ul");
        autocomplete_list.classList.add("autocomplete-list");
        search_div.appendChild(input);
        search_div.appendChild(autocomplete_list);
        search_div.appendChild(dropdown_icon);

        let select = document.querySelector(".multi-select-component");
        element.parentNode.replaceChild(wrapper, element);
        wrapper.appendChild(element);
        wrapper.appendChild(search_div);

        createInitialTokens(element);
        addPlaceholder(wrapper);
    }, []);

    function removePlaceholder(wrapper) {
        const input_search = wrapper.querySelector(".selected-input-" + id);
        input_search.removeAttribute("placeholder");
    }

    function addPlaceholder(wrapper) {
        const input_search = wrapper.querySelector(".selected-input-" + id);
        const tokens = wrapper.querySelectorAll(".selected-wrapper");
        if (!tokens.length && !(document.activeElement === input_search))
            input_search.setAttribute("placeholder", placeholder === "My Tasks" ? "My Tasks" : `Set ${placeholder}`);
    }

    function createInitialTokens(select) {
        let { options_selected } = getOptions(select);
        const wrapper = select.parentNode;
        for (let i = 0; i < options_selected.length; i++) {
            createToken(wrapper, options_selected[i]);
        }
    }

    function inputChange(e) {
        const wrapper = e.target.parentNode.parentNode;
        const select = wrapper.querySelector("select");
        const dropdown = wrapper.querySelector(".dropdown-icon");

        const input_val = e.target.value;

        if (input_val) {
            dropdown.classList.add("active");
            populateAutocompleteList(select, input_val.trim());
        } else {
            dropdown.classList.remove("active");
            const event = new Event("click");
            dropdown.dispatchEvent(event);
        }
    }

    function clickOnWrapper(e) {
        const wrapper = e.target;
        if (wrapper.tagName == "DIV") {
            const input_search = wrapper.querySelector(".selected-input");
            const dropdown = wrapper.querySelector(".dropdown-icon");
            if (!dropdown.classList.contains("active")) {
                const event = new Event("click");
                dropdown.dispatchEvent(event);
            }
            input_search.focus();
            removePlaceholder(wrapper);
        }
    }

    function openOptions(e) {
        const input_search = e.target;
        const wrapper = input_search.parentElement.parentElement;
        const dropdown = wrapper.querySelector(".dropdown-icon");
        if (!dropdown.classList.contains("active")) {
            const event = new Event("click");
            dropdown.dispatchEvent(event);
        }
        e.stopPropagation();
    }

    function createToken(wrapper, value) {
        const search = wrapper.querySelector(".search-container");
        const token = document.createElement("div");
        token.classList.add("selected-wrapper");
        const token_span = document.createElement("span");
        token_span.classList.add("selected-label");
        token_span.innerText = value;
        const close = document.createElement("a");
        close.classList.add("selected-close");
        close.setAttribute("tabindex", "-1");
        close.setAttribute("data-option", value);
        close.setAttribute("data-hits", 0);
        close.setAttribute("href", "#");
        close.innerText = "x";
        close.addEventListener("click", removeToken);
        token.appendChild(token_span);
        token.appendChild(close);
        wrapper.insertBefore(token, search);
    }

    function clickDropdown(e) {
        const dropdown = e.target;
        const wrapper = dropdown.parentNode.parentNode;
        const input_search = wrapper.querySelector(".selected-input");
        const select = wrapper.querySelector("select");
        dropdown.classList.toggle("active");

        if (dropdown.classList.contains("active")) {
            removePlaceholder(wrapper);
            input_search.focus();

            if (!input_search.value) {
                populateAutocompleteList(select, "", true);
            } else {
                populateAutocompleteList(select, input_search.value);
            }
        } else {
            clearAutocompleteList(select);
            addPlaceholder(wrapper);
        }
    }

    function clearAutocompleteList(select) {
        const wrapper = select.parentNode;

        const autocomplete_list = wrapper.querySelector(".autocomplete-list");
        autocomplete_list.innerHTML = "";
    }

    function populateAutocompleteList(select, query, dropdown = false) {
        const { autocomplete_options } = getOptions(select);

        let options_to_show;

        if (dropdown) options_to_show = autocomplete_options;
        else options_to_show = autocomplete(query, autocomplete_options);

        const wrapper = select.parentNode;
        const input_search = wrapper.querySelector(".search-container");
        const autocomplete_list = wrapper.querySelector(".autocomplete-list");
        autocomplete_list.innerHTML = "";
        const result_size = options_to_show.length;

        if (result_size == 1) {
            const li = document.createElement("li");
            li.innerText = options_to_show[0];
            li.setAttribute("data-value", options_to_show[0]);
            li.addEventListener("click", selectOption);
            autocomplete_list.appendChild(li);
            if (query.length == options_to_show[0].length) {
                const event = new Event("click");
                li.dispatchEvent(event);
            }
        } else if (result_size > 1) {
            for (let i = 0; i < result_size; i++) {
                const li = document.createElement("li");
                li.innerText = options_to_show[i];
                li.setAttribute("data-value", options_to_show[i]);
                li.addEventListener("click", selectOption);
                autocomplete_list.appendChild(li);
            }
        } else {
            const li = document.createElement("li");
            li.classList.add("not-cursor");
            li.innerText = "No options found";
            autocomplete_list.appendChild(li);
        }
    }

    function selectOption(e) {
        const wrapper = e.target.parentNode.parentNode.parentNode;
        const input_search = wrapper.querySelector(".selected-input");
        const option = wrapper.querySelector(
            `select option[value="${e.target.dataset.value}"]`
        );

        option.setAttribute("selected", "");
        createToken(wrapper, e.target.dataset.value);
        if (input_search.value) {
            input_search.value = "";
        }

        input_search.focus();

        e.target.remove();
        const autocomplete_list = wrapper.querySelector(".autocomplete-list");

        if (!autocomplete_list.children.length) {
            const li = document.createElement("li");
            li.classList.add("not-cursor");
            li.innerText = "No options found";
            autocomplete_list.appendChild(li);
        }

        const event = new Event("keyup");
        input_search.dispatchEvent(event);
        e.stopPropagation();
    }

    function autocomplete(query, options) {
        if (!query) {
            return options;
        }
        let options_return = [];

        for (let i = 0; i < options.length; i++) {
            if (
                query.toLowerCase() === options[i].slice(0, query.length).toLowerCase()
            ) {
                options_return.push(options[i]);
            }
        }
        return options_return;
    }

    function getOptions(select) {
        const all_options = Array.from(select.querySelectorAll("option")).map(
            (el) => el.value
        );

        const options_selected = Array.from(
            select.querySelectorAll("option:checked")
        ).map((el) => el.value);

        const autocomplete_options = [];
        all_options.forEach((option) => {
            if (!options_selected.includes(option)) {
                autocomplete_options.push(option);
            }
        });

        autocomplete_options.sort();

        return {
            options_selected,
            autocomplete_options
        };
    }

    function removeToken(e) {
        const value_to_remove = e.target.dataset.option;
        const wrapper = e.target.parentNode.parentNode;
        const input_search = wrapper.querySelector(".selected-input");
        const dropdown = wrapper.querySelector(".dropdown-icon");
        const option_to_unselect = wrapper.querySelector(
            `select option[value="${value_to_remove}"]`
        );
        option_to_unselect.removeAttribute("selected");
        e.target.parentNode.remove();
        input_search.focus();
        dropdown.classList.remove("active");
        const event = new Event("click");
        dropdown.dispatchEvent(event);
        e.stopPropagation();
    }

    function deletePressed(e) {
        const wrapper = e.target.parentNode.parentNode;
        const input_search = e.target;
        const key = e.keyCode || e.charCode;
        const tokens = wrapper.querySelectorAll(".selected-wrapper");

        if (tokens.length) {
            const last_token_x = tokens[tokens.length - 1].querySelector("a");
            let hits = +last_token_x.dataset.hits;

            if (key == 8 || key == 46) {
                if (!input_search.value) {
                    if (hits > 1) {
                        const event = new Event("click");
                        last_token_x.dispatchEvent(event);
                    } else {
                        last_token_x.dataset.hits = 2;
                    }
                }
            } else {
                last_token_x.dataset.hits = 0;
            }
        }
        return true;
    }

    function addOption(target, val, text) {
        const select = document.querySelector(target);
        let opt = document.createElement("option");
        opt.value = val;
        opt.innerHTML = text;
        select.appendChild(opt);
    }

    useEffect(() => {
        const selects = document.querySelectorAll("[data-multi-select-plugin='" + id + "']");
        selects.forEach((select) => {
            init(select);
        });

        const clickhandler = (event) => {
            const select = document.querySelectorAll("[data-multi-select-plugin]");
            for (let i = 0; i < select.length; i++) {
                if (event) {
                    var isClickInside = select[i].parentElement.parentElement.contains(
                        event.target
                    );

                    if (!isClickInside) {
                        const wrapper = select[i].parentElement.parentElement;
                        const dropdown = wrapper.querySelector(".dropdown-icon");
                        const autocomplete_list = wrapper.querySelector(
                            ".autocomplete-list"
                        );
                        dropdown.classList.remove("active");
                        autocomplete_list.innerHTML = "";
                        addPlaceholder(wrapper);
                    }
                }
            }
        };
        let listner = document.addEventListener("click", clickhandler);
        return () => {
            document.removeEventListener(listner, clickhandler);
        };
    }, []);

    return (
        <div className="input_component box_style" style={{ height: 'auto' }}>
            <div className="container">
                <select multiple data-multi-select-plugin={id} ref={ref}>
                    {options &&
                        options.map((option) => (
                            <option
                                key={option.value}
                                value={option.value}
                            >
                                {option.label}
                            </option>
                        ))}
                </select>
            </div>
        </div>
    );
};

export default React.memo(Select);

import DefSelect from "react-select";

export default (function Select(props: any) {
    return (
        <DefSelect
            {...props}
            theme={theme => ({
                ...theme,
                colors: {
                    ...theme.colors,
                    neutral0: "#434C5E", // background
                    neutral10: "#2E3440", // selected item
                    neutral20: "#2E3440", // border
                    neutral30: "darkorange", // hover
                    neutral50: "lightgrey", // placeholder text
                    neutral80: "white", // selected item text
                    primary: "darkorange", // active item and border of open picker
                    primary25: "#2E3440", // hovered item
                    primary50: "#2E3440" // clicked item
                }
            })}
            styles={{
                control: styles => ({ ...styles, margin: "0.6em 0" })
            }}
        />
    );
} as DefSelect);

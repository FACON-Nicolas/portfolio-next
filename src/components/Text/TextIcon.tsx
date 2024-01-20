import {Icon, IconName, Text, TextProps} from "@/components";

export const TextIcon = (props: TextProps & { icon: IconName}) => {
    return (
        <Text {...props} className="inline">
            <Icon name={props.icon} isClickable={false} />
            {props.children}
        </Text>
    )
}
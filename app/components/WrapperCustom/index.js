/*
 * FeaturePage
 *
 * List all the features
 */
import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

export const WrapperCustom = ({
    title,
    rightNode,
    children,
    disableTypographyTitle = false,
    disablePadding = false,
    // kế thừa props qua cấc cổng dưới
    cardProps,
    cardContentProps,
    titleProps,
    childrenContainerProps,
}) => (
    // CardShadow Sử dụng cùng style Shadow cho hahalolo
    <Card {...cardProps} style={{ boxShadow: '0px 0px 20px 0px rgba(44, 101, 144, 0.1)' }}>
        {/* CardContentPadding cho phép pađing tiêu chuẩn cho tất cả các card của Hahalolo */}
        <CardContent CardContent {...cardContentProps}>
            {/* Hỗ trợ title hoặc rightNote với css flex */}
            {/* Hỗ trợ Grid Layout cho title và rightNode */}
            {/* chỉ hiểm thị hoặc dom khi và chỉ khi 1 trong 2 props title và rightNode được sử dụng */}
            {
                (title || rightNode) && (
                    <Grid
                        container
                        spacing={title && rightNode ? 2 : undefined}
                        // defaulet là flex-end để hỗ trợ rightNode
                        justify="flex-end"
                    >
                        {title && (
                            // md = true để cho phép title lấy toàn bộ width tương đồng với justify="flex-end"
                            <Grid item xs={12} md>
                                {disableTypographyTitle ? (
                                    // trả về node dể người dùng tự control title
                                    title
                                ) : (
                                        // Hỗ trợ style title nếu ko disableTypographyTitle
                                        <Typography variant="h5" {...titleProps}>
                                            {title}
                                        </Typography>
                                    )}
                            </Grid>
                        )}
                        {rightNode && <Grid item>{rightNode}</Grid>}
                    </Grid>
                )
            }
            {/* Main children của WrapperBackEnd  */}
            {
                children && (
                    <Box
                        width="100%"
                        // hỗ trợ padding cho children tương đồng với CardContentPadding
                        py={!disablePadding ? 3 : undefined}
                        {...childrenContainerProps}
                    >
                        {children}
                    </Box>
                )
            }
        </CardContent>
    </Card >
);

export default WrapperCustom;

WrapperCustom.propTypes = {
    // Title card
    title: PropTypes.any,

    // Node được dom và hiểm thị ở phía bên phải bằng với Title
    rightNode: PropTypes.any,

    // children của WrapperBackEnd
    children: PropTypes.any,

    // disableTypographyTitle
    disableTypographyTitle: PropTypes.bool,
    // disablePading
    disablePadding: PropTypes.bool,

    // props của CardShadow
    // cho phép overWrite default hoặc custtom CardShadow
    // được kế thừa  các props của Mui-Card
    cardProps: PropTypes.object,

    // props của CardContentPadding
    // cho phép overWrite default hoặc custtom CardContentPadding
    // được kế thừa  các props của Mui-CardContent
    cardContentProps: PropTypes.object,

    // props của Mui-Box Children
    // cho phép overWrite default hoặc custtom Mui-Box Children
    childrenContainerProps: PropTypes.object,

    // props của TypographyTitleDefault
    // cho phép overWrite default hoặc custtom TypographyTitleDefault
    // được kế thừa  các props của Mui-Typography
    titleProps: PropTypes.object,
};

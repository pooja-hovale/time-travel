import React, { FunctionComponent, useState } from 'react';
// material
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export interface IPanelThreeData {
    link: string;
};

interface IPanelThreeProps extends IPanelThreeData {
    onSubmit: (data: IPanelThreeData) => void;
    onBack: () => void;
};

export const PanelThree: FunctionComponent<IPanelThreeProps> = (props) => {
    const { link, onBack, onSubmit } = props;
    // states
    const [ timerLink, setTimerLink ] = useState(link);
    // event handlers
    const handleLinkChange = (evt: any) => {
        if (evt.target.value !=='') {
          setTimerLink (evt.target.value);
        }
    };

    const handleNext = () => {
        onSubmit ({
            link: timerLink
        });
    };

    const handleBack = () => {
        onBack();
    };
    return (
        <React.Fragment>
          <Grid item xs={12} md={12}>
            <Typography color="textSecondary" align="center">
              Provide any third party link, associated to the Timer (optional) -
            </Typography>
            <TextField
            fullWidth
            variant="outlined"
            margin="normal"
            id="title"
            label="Enter Link - (optional)"
            name="title"
            autoFocus
            defaultValue={timerLink}
            onBlur={handleLinkChange}/>
          </Grid>
          <Grid item xs={12} md={6}>
              <Button
                onClick={handleNext}
                fullWidth
                variant="contained"
                color="secondary">
                  Next
              </Button>
          </Grid>
          <Grid item xs={12} md={6}>
              <Button
                disabled={false}
                onClick={handleBack}
                fullWidth
                variant="contained"
                color="default">
                  Back
              </Button>
          </Grid>
        </React.Fragment>
    );
};
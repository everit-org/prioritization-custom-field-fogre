import ForgeUI, { CustomField, CustomFieldEdit, StatusLozenge, render, Text, useProductContext, Fragment, Select, Option } from "@forge/ui";

const View = () => {
  const getLozengeApperance = (priorityLevel) => {
      switch (priorityLevel) {
          case 'low':
              return 'success';
          case 'medium':
              return 'inprogress';
          case 'high':
              return 'removed';
          default:
              return 'default'
      }
  }

  const {
      extensionContext: { fieldValue },
  } = useProductContext();

  return (
      <CustomField>
          <Text>
              <StatusLozenge text={fieldValue || 'None'} appearance={getLozengeApperance(fieldValue)} />
          </Text>
      </CustomField>
  );
};

const Edit = () => {
  const onSubmit = (formValue) => {
      const demand = +formValue.demand;
      const impact = +formValue.impact;
      const effort = +formValue.effort;
      const priorityValue = demand + impact + effort;

      if (priorityValue <= 4) {
          return 'high';
      } else if (priorityValue <= 6) {
          return 'medium';
      } else {
          return 'low'
      }
  }

  return (
      <CustomFieldEdit onSubmit={onSubmit} header="Select risk" width="medium" >
          <Fragment>
              <Select label="Demand" name="demand" isRequired>
                  <Option label="Low" value="3" />
                  <Option label="Medium" value="2" />
                  <Option label="High" value="1" />
              </Select>
              <Select label="Impact" name="impact" isRequired>
                  <Option label="Low" value="3" />
                  <Option label="Medium" value="2" />
                  <Option label="High" value="1" />
              </Select>
              <Select label="Effort" name="effort" isRequired>
                  <Option label="Low" value="1" />
                  <Option label="Medium" value="2" />
                  <Option label="High" value="3" />
              </Select>
          </Fragment>
      </CustomFieldEdit>
  );
};

export const runView = render(<View/>);
export const runEdit = render(<Edit/>)
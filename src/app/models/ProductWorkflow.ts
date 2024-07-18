import { WorkflowStep } from "./WorkflowStep";

export class ProductWorkflow {

    workflow_step_array: WorkflowStep[] = [];

    //------------------- 1 ----------------------------
    workflowstep1_1: WorkflowStep = {
        step: 1,
        partial_step: 1,
        description: 'PRODUCT_WORKFLOW.STEP_1_1_DETAIL', // add description and short description in i18n folder
        description_short: 'PRODUCT_WORKFLOW.STEP_1_1',
        product_id: -1, // if -1, no scan is needed. else the scanned product has to match this id
        picture_path_before: '', // add product picture after
        picture_path_after: './assets/product_pictures/pngs/schritt_1_find.png', // add product picture after
        done: false,
        current_active: false
    };

    workflowstep1_2: WorkflowStep = {
        step: 1,
        partial_step: 2,
        description: 'PRODUCT_WORKFLOW.STEP_1_2_DETAIL',
        description_short: 'PRODUCT_WORKFLOW.STEP_1_2',
        product_id: 1,
        picture_path_before: '',
        picture_path_after: './assets/product_pictures/pngs/schritt_1_find.png',
        done: false,
        current_active: false
    };

    workflowstep1_3: WorkflowStep = {
        step: 1,
        partial_step: 3,
        description: 'PRODUCT_WORKFLOW.STEP_1_3_DETAIL',
        description_short: 'PRODUCT_WORKFLOW.STEP_1_3',
        product_id: -1,
        picture_path_before: './assets/product_pictures/pngs/schritt_1_find.png',
        picture_path_after: './assets/product_pictures/pngs/schritt_1_put.png',
        done: false,
        current_active: false
    };

    //------------------- 2 ----------------------------
    workflowstep2_1: WorkflowStep = {
        step: 2,
        partial_step: 1,
        description: 'PRODUCT_WORKFLOW.STEP_2_1_DETAIL',
        description_short: 'PRODUCT_WORKFLOW.STEP_2_1',
        product_id: -1,
        picture_path_before: './assets/product_pictures/pngs/schritt_1_put.png',
        picture_path_after: './assets/product_pictures/pngs/schritt_2_find.png',
        done: false,
        current_active: false
    };

    workflowstep2_2: WorkflowStep = {
        step: 2,
        partial_step: 2,
        description: 'PRODUCT_WORKFLOW.STEP_2_2_DETAIL',
        description_short: 'PRODUCT_WORKFLOW.STEP_2_2',
        product_id: 2,
        picture_path_before: './assets/product_pictures/pngs/schritt_1_put.png',
        picture_path_after: './assets/product_pictures/pngs/schritt_2_find.png',
        done: false,
        current_active: false
    };

    workflowstep2_3: WorkflowStep = {
        step: 2,
        partial_step: 3,
        description: 'PRODUCT_WORKFLOW.STEP_2_3_DETAIL',
        description_short: 'PRODUCT_WORKFLOW.STEP_2_3',
        product_id: -1,
        picture_path_before: './assets/product_pictures/pngs/schritt_1_put.png',
        picture_path_after: './assets/product_pictures/pngs/schritt_2_put.png',
        done: false,
        current_active: false
    };

    //------------------- 3 ----------------------------
    workflowstep3_1: WorkflowStep = {
        step: 3,
        partial_step: 1,
        description: 'PRODUCT_WORKFLOW.STEP_3_1_DETAIL',
        description_short: 'PRODUCT_WORKFLOW.STEP_3_1',
        product_id: -1,
        picture_path_before: './assets/product_pictures/pngs/schritt_2_put.png',
        picture_path_after: './assets/product_pictures/pngs/schritt_3_find.png',
        done: false,
        current_active: false
    };

    workflowstep3_2: WorkflowStep = {
        step: 3,
        partial_step: 2,
        description: 'PRODUCT_WORKFLOW.STEP_3_2_DETAIL',
        description_short: 'PRODUCT_WORKFLOW.STEP_3_2',
        product_id: 3,
        picture_path_before: './assets/product_pictures/pngs/schritt_2_put.png',
        picture_path_after: './assets/product_pictures/pngs/schritt_3_find.png',
        done: false,
        current_active: false
    };

    workflowstep3_3: WorkflowStep = {
        step: 3,
        partial_step: 3,
        description: 'PRODUCT_WORKFLOW.STEP_3_3_DETAIL',
        description_short: 'PRODUCT_WORKFLOW.STEP_3_3',
        product_id: -1,
        picture_path_before: './assets/product_pictures/pngs/schritt_2_put.png',
        picture_path_after: './assets/product_pictures/pngs/schritt_3_put.png',
        done: false,
        current_active: false
    };

    //------------------- 4 ----------------------------
    workflowstep4_1: WorkflowStep = {
        step: 4,
        partial_step: 1,
        description: 'PRODUCT_WORKFLOW.STEP_4_1_DETAIL',
        description_short: 'PRODUCT_WORKFLOW.STEP_4_1',
        product_id: -1,
        picture_path_before: './assets/product_pictures/pngs/schritt_3_put.png',
        picture_path_after: './assets/product_pictures/pngs/schritt_4_find.png',
        done: false,
        current_active: false
    };

    workflowstep4_2: WorkflowStep = {
        step: 4,
        partial_step: 2,
        description: 'PRODUCT_WORKFLOW.STEP_4_2_DETAIL',
        description_short: 'PRODUCT_WORKFLOW.STEP_4_2',
        product_id: 4,
        picture_path_before: './assets/product_pictures/pngs/schritt_3_put.png',
        picture_path_after: './assets/product_pictures/pngs/schritt_4_find.png',
        done: false,
        current_active: false
    };

    workflowstep4_3: WorkflowStep = {
        step: 4,
        partial_step: 3,
        description: 'PRODUCT_WORKFLOW.STEP_4_3_DETAIL',
        description_short: 'PRODUCT_WORKFLOW.STEP_4_3',
        product_id: -1,
        picture_path_before: './assets/product_pictures/pngs/schritt_3_put.png',
        picture_path_after: './assets/product_pictures/pngs/schritt_4_put.png',
        done: false,
        current_active: false
    };

    //------------------- 5 ----------------------------
    workflowstep5_1: WorkflowStep = {
      step: 5,
      partial_step: 1,
      description: 'PRODUCT_WORKFLOW.STEP_5_1_DETAIL',
      description_short: 'PRODUCT_WORKFLOW.STEP_5_1',
      product_id: -1,
      picture_path_before: './assets/product_pictures/pngs/schritt_4_put.png',
      picture_path_after: './assets/product_pictures/pngs/schritt_5_find.png',
      done: false,
      current_active: false
    };

    workflowstep5_2: WorkflowStep = {
      step: 5,
      partial_step: 2,
      description: 'PRODUCT_WORKFLOW.STEP_5_2_DETAIL',
      description_short: 'PRODUCT_WORKFLOW.STEP_5_2',
      product_id: 5,
      picture_path_before: './assets/product_pictures/pngs/schritt_4_put.png',
      picture_path_after: './assets/product_pictures/pngs/schritt_5_find.png',
      done: false,
      current_active: false
    };

    workflowstep5_3: WorkflowStep = {
      step: 5,
      partial_step: 3,
      description: 'PRODUCT_WORKFLOW.STEP_5_3_DETAIL',
      description_short: 'PRODUCT_WORKFLOW.STEP_5_3',
      product_id: -1,
      picture_path_before: './assets/product_pictures/pngs/schritt_4_put.png',
      picture_path_after: './assets/product_pictures/pngs/schritt_5_put.png',
      done: false,
      current_active: false
    };

    //-----------------------------------------------------------------------------------------------------------------
    // -- hier kommt 9 mal derselbe Schritt für die Batteriezellen
    //------------------- 6 ----------------------------
    workflowstep6_1: WorkflowStep = {
      step: 6,
      partial_step: 1,
      description: 'PRODUCT_WORKFLOW.STEP_6_1_DETAIL',
      description_short: 'PRODUCT_WORKFLOW.STEP_6_1',
      product_id: -1,
      picture_path_before: './assets/product_pictures/pngs/schritt_5_put.png',
      picture_path_after: './assets/product_pictures/pngs/schritt_6_find.png',
      done: false,
      current_active: false
    };

    workflowstep6_2: WorkflowStep = {
      step: 6,
      partial_step: 2,
      description: 'PRODUCT_WORKFLOW.STEP_6_2_DETAIL',
      description_short: 'PRODUCT_WORKFLOW.STEP_6_2',
      product_id: 6,
      picture_path_before: './assets/product_pictures/pngs/schritt_5_put.png',
      picture_path_after: './assets/product_pictures/pngs/schritt_6_find.png',
      done: false,
      current_active: false
    };

    workflowstep6_3: WorkflowStep = {
      step: 6,
      partial_step: 3,
      description: 'PRODUCT_WORKFLOW.STEP_6_3_DETAIL',
      description_short: 'PRODUCT_WORKFLOW.STEP_6_3',
      product_id: -1,
      picture_path_before: './assets/product_pictures/pngs/schritt_5_put.png',
      picture_path_after: './assets/product_pictures/pngs/schritt_6_put.png',
      done: false,
      current_active: false
    };

    //------------------- 7 ----------------------------
    workflowstep7_1: WorkflowStep = {
      step: 7,
      partial_step: 1,
      description: 'PRODUCT_WORKFLOW.STEP_7_1_DETAIL',
      description_short: 'PRODUCT_WORKFLOW.STEP_7_1',
      product_id: -1,
      picture_path_before: './assets/product_pictures/pngs/schritt_6_put.png',
      picture_path_after: './assets/product_pictures/pngs/schritt_7_find.png',
      done: false,
      current_active: false
    };

    workflowstep7_2: WorkflowStep = {
      step: 7,
      partial_step: 2,
      description: 'PRODUCT_WORKFLOW.STEP_7_2_DETAIL',
      description_short: 'PRODUCT_WORKFLOW.STEP_7_2',
      product_id: 7,
      picture_path_before: './assets/product_pictures/pngs/schritt_6_put.png',
      picture_path_after: './assets/product_pictures/pngs/schritt_7_find.png',
      done: false,
      current_active: false
    };

    workflowstep7_3: WorkflowStep = {
      step: 7,
      partial_step: 3,
      description: 'PRODUCT_WORKFLOW.STEP_7_3_DETAIL',
      description_short: 'PRODUCT_WORKFLOW.STEP_7_3',
      product_id: -1,
      picture_path_before: './assets/product_pictures/pngs/schritt_6_put.png',
      picture_path_after: './assets/product_pictures/pngs/schritt_7_put.png',
      done: false,
      current_active: false
    };

    //------------------- 8 ----------------------------
    workflowstep8_1: WorkflowStep = {
      step: 8,
      partial_step: 1,
      description: 'PRODUCT_WORKFLOW.STEP_8_1_DETAIL',
      description_short: 'PRODUCT_WORKFLOW.STEP_8_1',
      product_id: -1,
      picture_path_before: './assets/product_pictures/pngs/schritt_7_put.png',
      picture_path_after: './assets/product_pictures/pngs/schritt_8_find.png',
      done: false,
      current_active: false
    };

    workflowstep8_2: WorkflowStep = {
      step: 8,
      partial_step: 2,
      description: 'PRODUCT_WORKFLOW.STEP_8_2_DETAIL',
      description_short: 'PRODUCT_WORKFLOW.STEP_8_2',
      product_id: 8,
      picture_path_before: './assets/product_pictures/pngs/schritt_7_put.png',
      picture_path_after: './assets/product_pictures/pngs/schritt_8_find.png',
      done: false,
      current_active: false
    };

    workflowstep8_3: WorkflowStep = {
        step: 8,
        partial_step: 3,
        description: 'PRODUCT_WORKFLOW.STEP_8_3_DETAIL',
        description_short: 'PRODUCT_WORKFLOW.STEP_8_3',
        product_id: -1,
        picture_path_before: './assets/product_pictures/pngs/schritt_7_put.png',
        picture_path_after: './assets/product_pictures/pngs/schritt_8_put.png',
        done: false,
        current_active: false
    };

    //------------------- 9 ----------------------------
    workflowstep9_1: WorkflowStep = {
        step: 9,
        partial_step: 1,
        description: 'PRODUCT_WORKFLOW.STEP_9_1_DETAIL',
        description_short: 'PRODUCT_WORKFLOW.STEP_9_1',
        product_id: -1,
        picture_path_before: './assets/product_pictures/pngs/schritt_8_put.png',
        picture_path_after: './assets/product_pictures/pngs/schritt_9_find.png',
        done: false,
        current_active: false
    };

    workflowstep9_2: WorkflowStep = {
        step: 9,
        partial_step: 2,
        description: 'PRODUCT_WORKFLOW.STEP_9_2_DETAIL',
        description_short: 'PRODUCT_WORKFLOW.STEP_9_2',
        product_id: 9,
        picture_path_before: './assets/product_pictures/pngs/schritt_8_put.png',
        picture_path_after: './assets/product_pictures/pngs/schritt_9_find.png',
        done: false,
        current_active: false
    };

    workflowstep9_3: WorkflowStep = {
        step: 9,
        partial_step: 3,
        description: 'PRODUCT_WORKFLOW.STEP_9_3_DETAIL',
        description_short: 'PRODUCT_WORKFLOW.STEP_9_3',
        product_id: -1,
        picture_path_before: './assets/product_pictures/pngs/schritt_8_put.png',
        picture_path_after: './assets/product_pictures/pngs/schritt_9_put.png',
        done: false,
        current_active: false
    };

    //------------------- 10 ----------------------------
    workflowstep10_1: WorkflowStep = {
        step: 10,
        partial_step: 1,
        description: 'PRODUCT_WORKFLOW.STEP_10_1_DETAIL',
        description_short: 'PRODUCT_WORKFLOW.STEP_10_1',
        product_id: -1,
        picture_path_before: './assets/product_pictures/pngs/schritt_9_put.png',
        picture_path_after: './assets/product_pictures/pngs/schritt_10_find.png',
        done: false,
        current_active: false
    };

    workflowstep10_2: WorkflowStep = {
        step: 10,
        partial_step: 2,
        description: 'PRODUCT_WORKFLOW.STEP_10_2_DETAIL',
        description_short: 'PRODUCT_WORKFLOW.STEP_10_2',
        product_id: 10,
        picture_path_before: './assets/product_pictures/pngs/schritt_9_put.png',
        picture_path_after: './assets/product_pictures/pngs/schritt_10_find.png',
        done: false,
        current_active: false
    };


    workflowstep10_3: WorkflowStep = {
      step: 10,
      partial_step: 3,
      description: 'PRODUCT_WORKFLOW.STEP_10_3_DETAIL',
      description_short: 'PRODUCT_WORKFLOW.STEP_10_3',
      product_id: -1,
      picture_path_before: './assets/product_pictures/pngs/schritt_9_put.png',
      picture_path_after: './assets/product_pictures/pngs/schritt_10_put.png',
      done: false,
      current_active: false
    };

    //------------------- 11 ----------------------------
    workflowstep11_1: WorkflowStep = {
        step: 11,
        partial_step: 1,
        description: 'PRODUCT_WORKFLOW.STEP_11_1_DETAIL',
        description_short: 'PRODUCT_WORKFLOW.STEP_11_1',
        product_id: -1,
        picture_path_before: './assets/product_pictures/pngs/schritt_10_put.png',
        picture_path_after: './assets/product_pictures/pngs/schritt_11_find.png',
        done: false,
        current_active: false
    };

    workflowstep11_2: WorkflowStep = {
        step: 11,
        partial_step: 2,
        description: 'PRODUCT_WORKFLOW.STEP_11_2_DETAIL',
        description_short: 'PRODUCT_WORKFLOW.STEP_11_2',
        product_id: 11,
        picture_path_before: './assets/product_pictures/pngs/schritt_10_put.png',
        picture_path_after: './assets/product_pictures/pngs/schritt_11_find.png',
        done: false,
        current_active: false
    };

    workflowstep11_3: WorkflowStep = {
        step: 11,
        partial_step: 3,
        description: 'PRODUCT_WORKFLOW.STEP_11_3_DETAIL',
        description_short: 'PRODUCT_WORKFLOW.STEP_11_3',
        product_id: -1,
        picture_path_before: './assets/product_pictures/pngs/schritt_11_put.png',
        picture_path_after: './assets/product_pictures/pngs/schritt_12_find.png',
        done: false,
        current_active: false
    };

    //------------------- 12 ----------------------------
    workflowstep12_1: WorkflowStep = {
        step: 12,
        partial_step: 1,
        description: 'PRODUCT_WORKFLOW.STEP_12_1_DETAIL',
        description_short: 'PRODUCT_WORKFLOW.STEP_12_1',
        product_id: -1,
        picture_path_before: './assets/product_pictures/pngs/schritt_11_put.png',
        picture_path_after: './assets/product_pictures/pngs/schritt_12_find.png',
        done: false,
        current_active: false
    };

    workflowstep12_2: WorkflowStep = {
        step: 12,
        partial_step: 2,
        description: 'PRODUCT_WORKFLOW.STEP_12_2_DETAIL',
        description_short: 'PRODUCT_WORKFLOW.STEP_12_2',
        product_id: 12,
        picture_path_before: './assets/product_pictures/pngs/schritt_11_put.png',
        picture_path_after: './assets/product_pictures/pngs/schritt_12_find.png',
        done: false,
        current_active: false
    };

    workflowstep12_3: WorkflowStep = {
        step: 12,
        partial_step: 3,
        description: 'PRODUCT_WORKFLOW.STEP_12_3_DETAIL',
        description_short: 'PRODUCT_WORKFLOW.STEP_12_3',
        product_id: -1,
        picture_path_before: './assets/product_pictures/pngs/schritt_12_put.png',
        picture_path_after: './assets/product_pictures/pngs/schritt_13_find.png',
        done: false,
        current_active: false
    };

    //------------------- 13 ----------------------------
    workflowstep13_1: WorkflowStep = {
        step: 13,
        partial_step: 1,
        description: 'PRODUCT_WORKFLOW.STEP_13_1_DETAIL',
        description_short: 'PRODUCT_WORKFLOW.STEP_13_1',
        product_id: -1,
        picture_path_before: './assets/product_pictures/pngs/schritt_12_put.png',
        picture_path_after: './assets/product_pictures/pngs/schritt_13_find.png',
        done: false,
        current_active: false
    };

    workflowstep13_2: WorkflowStep = {
        step: 13,
        partial_step: 2,
        description: 'PRODUCT_WORKFLOW.STEP_13_2_DETAIL',
        description_short: 'PRODUCT_WORKFLOW.STEP_13_2',
        product_id: 13,
        picture_path_before: './assets/product_pictures/pngs/schritt_12_put.png',
        picture_path_after: './assets/product_pictures/pngs/schritt_13_find.png',
        done: false,
        current_active: false
    };

    workflowstep13_3: WorkflowStep = {
        step: 13,
        partial_step: 3,
        description: 'PRODUCT_WORKFLOW.STEP_13_3_DETAIL',
        description_short: 'PRODUCT_WORKFLOW.STEP_13_3',
        product_id: -1,
        picture_path_before: './assets/product_pictures/pngs/schritt_13_put.png',
        picture_path_after: './assets/product_pictures/pngs/schritt_14_find.png',
        done: false,
        current_active: false
    };

    //------------------- 14 ----------------------------
    workflowstep14_1: WorkflowStep = {
        step: 14,
        partial_step: 1,
        description: 'PRODUCT_WORKFLOW.STEP_14_1_DETAIL',
        description_short: 'PRODUCT_WORKFLOW.STEP_14_1',
        product_id: -1,
        picture_path_before: './assets/product_pictures/pngs/schritt_13_put.png',
        picture_path_after: './assets/product_pictures/pngs/schritt_14_find.png',
        done: false,
        current_active: false
    };

    workflowstep14_2: WorkflowStep = {
        step: 14,
        partial_step: 2,
        description: 'PRODUCT_WORKFLOW.STEP_14_2_DETAIL',
        description_short: 'PRODUCT_WORKFLOW.STEP_14_2',
        product_id: 14,
        picture_path_before: './assets/product_pictures/pngs/schritt_13_put.png',
        picture_path_after: './assets/product_pictures/pngs/schritt_14_find.png',
        done: false,
        current_active: false
    };

    workflowstep14_3: WorkflowStep = {
        step: 14,
        partial_step: 3,
        description: 'PRODUCT_WORKFLOW.STEP_14_3_DETAIL',
        description_short: 'PRODUCT_WORKFLOW.STEP_14_3',
        product_id: -1,
        picture_path_before: './assets/product_pictures/pngs/schritt_14_put.png',
        picture_path_after: './assets/product_pictures/pngs/schritt_15_find.png',
        done: false,
        current_active: false
    };

    //------------------- 15 ----------------------------
    workflowstep15_1: WorkflowStep = {
        step: 15,
        partial_step: 1,
        description: 'PRODUCT_WORKFLOW.STEP_15_1_DETAIL',
        description_short: 'PRODUCT_WORKFLOW.STEP_15_1',
        product_id: -1,
        picture_path_before: './assets/product_pictures/pngs/schritt_14_put.png',
        picture_path_after: './assets/product_pictures/pngs/schritt_15_find.png',
        done: false,
        current_active: false
    };

    workflowstep15_2: WorkflowStep = {
        step: 15,
        partial_step: 2,
        description: 'PRODUCT_WORKFLOW.STEP_15_2_DETAIL',
        description_short: 'PRODUCT_WORKFLOW.STEP_15_2',
        product_id: 15,
        picture_path_before: './assets/product_pictures/pngs/schritt_14_put.png',
        picture_path_after: './assets/product_pictures/pngs/schritt_15_find.png',
        done: false,
        current_active: false
    };

    workflowstep15_3: WorkflowStep = {
        step: 15,
        partial_step: 3,
        description: 'PRODUCT_WORKFLOW.STEP_15_3_DETAIL',
        description_short: 'PRODUCT_WORKFLOW.STEP_15_3',
        product_id: -1,
        picture_path_before: './assets/product_pictures/pngs/schritt_15_put.png',
        picture_path_after: './assets/product_pictures/pngs/schritt_16_find.png',
        done: false,
        current_active: false
    };

    //------------------- 16 ----------------------------
    workflowstep16_1: WorkflowStep = {
        step: 16,
        partial_step: 1,
        description: 'PRODUCT_WORKFLOW.STEP_16_1_DETAIL',
        description_short: 'PRODUCT_WORKFLOW.STEP_16_1',
        product_id: -1,
        picture_path_before: './assets/product_pictures/pngs/schritt_15_put.png',
        picture_path_after: './assets/product_pictures/pngs/schritt_16_find.png',
        done: false,
        current_active: false
    };

    workflowstep16_2: WorkflowStep = {
        step: 16,
        partial_step: 2,
        description: 'PRODUCT_WORKFLOW.STEP_16_2_DETAIL',
        description_short: 'PRODUCT_WORKFLOW.STEP_16_2',
        product_id: 16,
        picture_path_before: './assets/product_pictures/pngs/schritt_15_put.png',
        picture_path_after: './assets/product_pictures/pngs/schritt_16_find.png',
        done: false,
        current_active: false
    };

    workflowstep16_3: WorkflowStep = {
        step: 16,
        partial_step: 3,
        description: 'PRODUCT_WORKFLOW.STEP_16_3_DETAIL',
        description_short: 'PRODUCT_WORKFLOW.STEP_16_3',
        product_id: -1,
        picture_path_before: './assets/product_pictures/pngs/schritt_15_put.png',
        picture_path_after: './assets/product_pictures/pngs/schritt_16_put.png',
        done: false,
        current_active: false
    };

    //------------------- 17 ----------------------------
    workflowstep17_1: WorkflowStep = {
        step: 17,
        partial_step: 1,
        description: 'PRODUCT_WORKFLOW.STEP_17_1_DETAIL',
        description_short: 'PRODUCT_WORKFLOW.STEP_17_1',
        product_id: -1,
        picture_path_before: './assets/product_pictures/pngs/schritt_16_put.png',
        picture_path_after: './assets/product_pictures/pngs/schritt_17_find.png',
        done: false,
        current_active: false
    };

    workflowstep17_2: WorkflowStep = {
        step: 17,
        partial_step: 2,
        description: 'PRODUCT_WORKFLOW.STEP_17_2_DETAIL',
        description_short: 'PRODUCT_WORKFLOW.STEP_17_2',
        product_id: 17,
        picture_path_before: './assets/product_pictures/pngs/schritt_16_put.png',
        picture_path_after: './assets/product_pictures/pngs/schritt_17_find.png',
        done: false,
        current_active: false
    };

    workflowstep17_3: WorkflowStep = {
        step: 17,
        partial_step: 3,
        description: 'PRODUCT_WORKFLOW.STEP_17_3_DETAIL',
        description_short: 'PRODUCT_WORKFLOW.STEP_17_3',
        product_id: -1,
        picture_path_before: './assets/product_pictures/pngs/schritt_16_put.png',
        picture_path_after: './assets/product_pictures/pngs/schritt_17_put.png',
        done: false,
        current_active: false
    };

    //------------------- Finished ----------------------------
    workflowstep_finished: WorkflowStep = {
        step: 18,
        partial_step: 1,
        description: 'PRODUCT_WORKFLOW.STEP_FINISHED_DETAIL',
        description_short: 'PRODUCT_WORKFLOW.STEP_FINISHED',
        product_id: -1,
        picture_path_before: './assets/product_pictures/pngs/schritt_17_put.png',
        picture_path_after: './assets/product_pictures/pngs/schritt_17_put.png',
        done: true,
        current_active: false
    };

    constructor(){
        this.workflow_step_array = [];

        this.workflow_step_array.push(this.workflowstep1_1);
        this.workflow_step_array.push(this.workflowstep1_2);
        this.workflow_step_array.push(this.workflowstep1_3);

        this.workflow_step_array.push(this.workflowstep2_1);
        this.workflow_step_array.push(this.workflowstep2_2);
        this.workflow_step_array.push(this.workflowstep2_3);

        this.workflow_step_array.push(this.workflowstep3_1);
        this.workflow_step_array.push(this.workflowstep3_2);
        this.workflow_step_array.push(this.workflowstep3_3);

        this.workflow_step_array.push(this.workflowstep4_1);
        this.workflow_step_array.push(this.workflowstep4_2);
        this.workflow_step_array.push(this.workflowstep4_3);

        this.workflow_step_array.push(this.workflowstep5_1);
        this.workflow_step_array.push(this.workflowstep5_2);
        this.workflow_step_array.push(this.workflowstep5_3);

        this.workflow_step_array.push(this.workflowstep6_1);
        this.workflow_step_array.push(this.workflowstep6_2);
        this.workflow_step_array.push(this.workflowstep6_3);

        this.workflow_step_array.push(this.workflowstep7_1);
        this.workflow_step_array.push(this.workflowstep7_2);
        this.workflow_step_array.push(this.workflowstep7_3);

        this.workflow_step_array.push(this.workflowstep8_1);
        this.workflow_step_array.push(this.workflowstep8_2);
        this.workflow_step_array.push(this.workflowstep8_3);

        this.workflow_step_array.push(this.workflowstep9_1);
        this.workflow_step_array.push(this.workflowstep9_2);
        this.workflow_step_array.push(this.workflowstep9_3);

        this.workflow_step_array.push(this.workflowstep10_1);
        this.workflow_step_array.push(this.workflowstep10_2);
        this.workflow_step_array.push(this.workflowstep10_3);

        this.workflow_step_array.push(this.workflowstep11_1);
        this.workflow_step_array.push(this.workflowstep11_2);
        this.workflow_step_array.push(this.workflowstep11_3);

        this.workflow_step_array.push(this.workflowstep12_1);
        this.workflow_step_array.push(this.workflowstep12_2);
        this.workflow_step_array.push(this.workflowstep12_3);

        this.workflow_step_array.push(this.workflowstep13_1);
        this.workflow_step_array.push(this.workflowstep13_2);
        this.workflow_step_array.push(this.workflowstep13_3);

        this.workflow_step_array.push(this.workflowstep14_1);
        this.workflow_step_array.push(this.workflowstep14_2);
        this.workflow_step_array.push(this.workflowstep14_3);

        this.workflow_step_array.push(this.workflowstep15_1);
        this.workflow_step_array.push(this.workflowstep15_2);
        this.workflow_step_array.push(this.workflowstep15_3);

        this.workflow_step_array.push(this.workflowstep16_1);
        this.workflow_step_array.push(this.workflowstep16_2);
        this.workflow_step_array.push(this.workflowstep16_3);

        this.workflow_step_array.push(this.workflowstep17_1);
        this.workflow_step_array.push(this.workflowstep17_2);
        this.workflow_step_array.push(this.workflowstep17_3);

        this.workflow_step_array.push(this.workflowstep_finished);

    }

    public get_product_workflow() {
        return this.workflow_step_array;
    }

    // returns all partial_steps for specific step
    public get_workflow_by_step(workflowsteps: WorkflowStep[], step_id: number) {
        return workflowsteps.filter(step => step.step === step_id);
    }

    // returns all partial_steps for specific step
    public get_workflow_partial_step(workflowsteps: WorkflowStep[], step_id: number, partial_step_id: number) {
        return workflowsteps.find(step => step.step === step_id && step.partial_step === partial_step_id) || this.workflowstep1_1;
    }

    public step_is_fully_done(workflowsteps: WorkflowStep[], step_id: number) {
        const workflows = this.get_workflow_by_step(workflowsteps, step_id);
        return workflows[workflows.length - 1].done;
    }
}
